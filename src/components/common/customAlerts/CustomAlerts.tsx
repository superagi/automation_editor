import React from 'react'
import styles from './Message.module.css'
import { MessageProps } from './type'
import imagePath from '@/constants/imagePath'
import Image from 'next/image'

const Message: React.FC<MessageProps> = ({
  source,
  type,
  title,
  description,
  children,
}) => {
  const typeCSS = {
    info: {
      css: styles.info_message,
      src: imagePath.common.infoIcon,
      alt: 'info_message_icon',
    },
    warning: {
      css: styles.warning_message,
      src: imagePath.common.warningIcon,
      alt: 'warning_message_icon',
    },
  }

  return (
    <div id={`${source}_${type}_message`} className={typeCSS[type].css}>
      <Image
        className="size-5 mt-[2px]"
        src={typeCSS[type].src}
        alt={typeCSS[type].alt}
      />
      <div
        className={`flex flex-col text-white proxima_nova ${title ? 'gap-1' : 'gap-[2px]'}`}
      >
        {title && <span className="text-base font-semibold">{title}</span>}
        {description && (
          <span className="text-sm font-normal">{description}</span>
        )}
        {children}
      </div>
    </div>
  )
}

export default Message
