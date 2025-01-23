export interface QuillEditorProps {
  modelValue?: string
  onblur?: () => void
  showAttachButton?: boolean
  height?: number
  customToolbar?: any[]
  autoFocus?: boolean
  onAttachmentsUpdated?: (attachments: any[]) => void
  onTextChange?: (html: string) => void
}
