import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import AttachedItem from '../attachedItem/AttachedItem'
import imagePath from '@/constants/imagePath'
import Image from 'next/image'
import { Button, Input, message } from 'antd'
import CustomModal from '../customModal/CustomModal'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import DOMPurify from 'dompurify'
import ImageResize from 'quill-image-resize'
import { Delta } from 'quill'
import Link from 'quill/formats/link'
import './QuillEditorStyles.css'
import { QuillEditorProps } from './type'

const QuillEditor: React.FC<QuillEditorProps> = ({
  modelValue,
  onblur,
  showAttachButton = false,
  height = 200,
  customToolbar,
  autoFocus = false,
  onAttachmentsUpdated = () => {},
  onTextChange = () => {},
}) => {
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [imageUrlError, setImageUrlError] = useState('')
  const [attachments, setAttachments] = useState<any[]>([])

  const editorContainerRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const quillRef = useRef<Quill | null>(null)

  const createToolbarHandlers = (quill: Quill) => ({
    link: function (this: any, value: boolean) {
      if (value) {
        const href = prompt('Enter the URL')
        if (href) {
          quill.format('link', href)
        }
      } else {
        quill.format('link', false)
      }
    },
    image: () => setShowImageModal(true),
  })

  useEffect(() => {
    if (
      (typeof window !== 'undefined' && !editorContainerRef.current) ||
      quillRef.current
    )
      return

    // Register custom formats
    registerCustomFormats()

    // Initialize Quill
    const quillInstance = initializeQuill()
    quillRef.current = quillInstance

    if (quillInstance) {
      // Set up event handlers
      setupEventHandlers(quillInstance)
    }

    return () => {
      if (quillRef.current) {
        // Cleanup
        quillRef.current.off('text-change')
      }
    }
  }, [])

  const registerCustomFormats = () => {
    const BlockEmbed: any = Quill.import('blots/block/embed')

    // Custom Link Format
    class CustomLink extends Link {
      static create(value: string) {
        const node = super.create(value)
        node.setAttribute('href', this.sanitize(value))
        node.setAttribute('rel', 'noopener noreferrer')
        node.setAttribute('target', '_blank')
        node.setAttribute('class', 'custom_link')
        return node
      }

      format(name: string, value: string) {
        if (name !== this.statics.blotName || !value) {
          super.format(name, value)
        } else {
          this.domNode.setAttribute('href', this.constructor.sanitize(value))
          this.domNode.setAttribute('target', '_blank')
          this.domNode.setAttribute('rel', 'noopener noreferrer')
          this.domNode.setAttribute('class', 'custom_link')
        }
      }
    }

    // Custom Image Format
    class ImageBlot extends BlockEmbed {
      static blotName = 'image'
      static tagName = 'img'

      static create(value: { alt: string; url: string }) {
        const node = super.create()
        node.setAttribute('alt', value.alt)
        node.setAttribute('src', value.url)
        return node
      }

      static value(node: HTMLElement) {
        return {
          alt: node.getAttribute('alt'),
          url: node.getAttribute('src'),
        }
      }
    }

    Quill.register(ImageBlot)
    Quill.register('modules/imageResize', ImageResize)
    Quill.register('formats/link', CustomLink, true)
  }

  const initializeQuill = () => {
    if (!editorContainerRef.current) return null

    const quill = new Quill(editorContainerRef.current, {
      theme: 'snow',
      modules: {
        toolbar: customToolbar || [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: [] }],
          ['image'],
          ['clean'],
        ],
        clipboard: {
          matchVisual: false,
          matchers: [['*', removeStylesFromPaste]],
        },
        imageResize: {
          displaySize: true,
          modules: ['Resize', 'DisplaySize', 'Toolbar'],
        },
      },
      placeholder: 'Compose an epic...',
    })

    return quill
  }

  const setupEventHandlers = (quill: Quill) => {
    const toolbar: any = quill.getModule('toolbar')
    const handlers = createToolbarHandlers(quill)

    toolbar.addHandler('link', handlers.link)
    toolbar.addHandler('image', handlers.image)

    quill.on('text-change', () => {
      const sanitizedHtml = sanitizeHtml(quill.root.innerHTML)
      onTextChange(sanitizedHtml)
    })

    if (onblur) {
      quill.root.addEventListener('blur', onblur)
    }

    if (modelValue) {
      quill.root.innerHTML = modelValue
    }

    if (autoFocus) {
      quill.focus()
    }
  }

  const removeStylesFromPaste = (node: any, delta: Delta) => {
    const ops = delta.ops.map((op) => ({
      ...op,
      attributes: op.attributes
        ? Object.fromEntries(
            Object.entries(op.attributes).filter(
              ([key]) => !['color', 'background'].includes(key)
            )
          )
        : undefined,
    }))
    return new Delta(ops)
  }

  // Rest of your code remains the same...
  const sanitizeHtml = (html: string): string => {
    const tempDiv = document.createElement('div')
    const cleanHtml = DOMPurify.sanitize(html, {
      ADD_TAGS: ['img', 'a'],
      ADD_ATTR: ['href', 'target', 'width', 'height', 'class', 'src', 'alt'],
    })

    tempDiv.innerHTML = cleanHtml

    tempDiv.querySelectorAll('img').forEach((img) => {
      if (img.style.width) {
        img.setAttribute('width', img.style.width)
      }
      if (img.style.height) {
        img.setAttribute('height', img.style.height)
      }
    })

    tempDiv
      .querySelectorAll('p, h1, h2, h3, h4, h5, h6')
      .forEach((el: Element) => {
        ;(el as HTMLElement).style.margin = '0'
      })

    return tempDiv.innerHTML
  }

  // Your existing file handling functions...
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files
    if (!files?.length) return

    const newTotalSize =
      getTotalAttachmentSize() +
      Array.from(files).reduce((sum, file) => sum + file.size, 0)

    if (newTotalSize > MAX_FILE_SIZE) {
      message.error('Attachments size should be less than 10MB per email')
      event.target.value = ''
      return
    }

    for (const file of files) {
      const tempId = `${Date.now()}-${Math.random().toString(36).slice(2)}`
      const tempAttachment = {
        file_id: tempId,
        file_name: file.name,
        file_size: file.size,
        isLoading: true,
      }

      setAttachments((prev) => [...prev, tempAttachment])
      await uploadSingleFile(file, tempId)
    }

    event.target.value = ''
  }

  // Rest of your methods...
  const getTotalAttachmentSize = () => {
    return attachments.reduce(
      (total, attachment) => total + attachment.file_size,
      0
    )
  }

  const uploadSingleFile = async (file: File, tempId: string) => {
    const formData = new FormData()
    formData.append('files[]', file)

    try {
      console.log('Upload formData:', formData)
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error)
      removeAttachment(tempId)
    }
  }

  const updateAttachment = (tempId: string, newAttachment: any) => {
    setAttachments((prev) => {
      const index = prev.findIndex((a) => a.file_id === tempId)
      if (index === -1) return prev

      const updated = [...prev]
      updated[index] = {
        ...newAttachment,
        file_id: newAttachment.id,
        isLoading: false,
      }
      return updated
    })

    emitUpdatedAttachments()
  }

  const removeAttachment = (fileId: string) => {
    setAttachments((prev) => prev.filter((a) => a.file_id !== fileId))
    emitUpdatedAttachments()
  }

  const emitUpdatedAttachments = () => {
    const uploadedAttachments = attachments.filter((a) => !a.isLoading)
    onAttachmentsUpdated(uploadedAttachments)
  }

  const insertImage = (url: string, alt: string = '') => {
    if (!quillRef.current) return

    const range = quillRef.current.getSelection(true)
    quillRef.current.insertEmbed(range.index, 'image', {
      alt: alt || 'image',
      url: url,
    })
    quillRef.current.setSelection(range.index + 1)
  }

  const confirmImageInsert = () => {
    if (!isValidUrl(imageUrl)) {
      setImageUrlError('Please enter a valid URL')
      return
    }

    insertImage(imageUrl)
    setShowImageModal(false)
    setImageUrl('')
    setImageUrlError('')
  }

  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString)
      return true
    } catch (e) {
      return false
    }
  }

  // Your existing JSX remains the same...
  return (
    <div>
      <div
        ref={editorContainerRef}
        className={`${styles.quill_editor} text-white`}
        style={{ height: `${height}px` }}
      />
      <div className="flex flex-col w-full h-fit">
        <div className="flex flex-row gap-1 flex-wrap mt-4 mb-1 mx-1">
          {attachments.map((file) => (
            <AttachedItem
              key={file.file_id}
              id={file.file_id}
              downloadable={false}
              fileSize={file.file_size}
              fileName={file.file_name}
              isLoading={file.isLoading}
              onRemove={() => removeAttachment(file.file_id)}
            />
          ))}
        </div>
        {showAttachButton && (
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="!border-none !bg-transparent w-fit p-0 m-1"
          >
            <Image
              src={imagePath.common.attachFileIcon}
              alt="attach file icon"
              className="size-5"
            />
          </Button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className={'hidden'}
        />
        <CustomModal
          onClose={() => setShowImageModal(false)}
          title="Insert Image"
          visible={showImageModal}
          width="32vw"
          footer={
            <div className="flex justify-end gap-2">
              <Button onClick={() => setShowImageModal(false)}>Cancel</Button>
              <Button
                className="primary_medium"
                onClick={confirmImageInsert}
                disabled={!imageUrl}
              >
                Insert
              </Button>
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="w-full"
            />
            {imageUrlError && (
              <div className="text-red-500 text-sm">{imageUrlError}</div>
            )}
          </div>
        </CustomModal>
      </div>
    </div>
  )
}

export default QuillEditor
