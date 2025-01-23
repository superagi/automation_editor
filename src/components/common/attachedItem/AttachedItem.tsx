import React, { useState } from 'react'
import styles from './styles.module.css'
import imagePath from '@/constants/imagePath'
import Image from 'next/image'
import { formatFileSize } from '@/utils/utils'
import CustomLoader from '../customLoader/CustomLoader'
import { CustomAttachmentItemProps } from './type'

const AttachedItem: React.FC<CustomAttachmentItemProps> = ({
  id,
  fileName,
  fileSize,
  downloadable,
  isLoading = false,
  onRemove,
}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleRemove = () => {
    onRemove(id)
  }

  const handleClick = () => {
    if (downloadable) {
      setIsClicked(true)
      setTimeout(() => {
        setIsClicked(false)
      }, 200)

      const link = document.createElement('a')
      link.href = `/api/conversation_attachments/${id}/download`
      link.download = fileName
      link.click()
    }
  }

  return (
    <div
      id={`attached_file_${id}`}
      className={`flex flex-row gap-[6px] py-1 px-2 rounded-2xl items-center justify-center ${styles.attached_item} ${downloadable ? 'cursor-pointer' : ''} ${isClicked ? styles.clicked : ''}`}
      onClick={handleClick}
    >
      <Image
        src={imagePath.common.attachFileIcon}
        className={'size-3.5 cursor-pointer'}
        alt="attach_icon"
      />
      <span className="font-sans text-[11px] text-white">{fileName}</span>
      <span className="font-sans text-[11px] secondary_color font-light">
        {formatFileSize(fileSize)}
      </span>
      {isLoading ? (
        <CustomLoader size="10" borderWidth="3" />
      ) : downloadable ? (
        <Image
          src={imagePath.common.downloadIcon}
          className="size-3.5 cursor-pointer"
          alt="download_icon"
        />
      ) : (
        <Image
          src={imagePath.common.closeIcon}
          className="size-3.5 cursor-pointer"
          alt="remove_icon"
          onClick={(e) => {
            e.stopPropagation()
            handleRemove()
          }}
        />
      )}
    </div>
  )
}

export default AttachedItem
