// Modal.tsx
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.css'
import { ModalProps } from './type'
import Image from 'next/image'
import imagePath from '@/constants/imagePath'

const CustomModal: React.FC<ModalProps> = ({
  title,
  visible,
  width = '400px',
  onClose,
  children,
  footer,
}) => {
  const [isClient, setIsClient] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [isClosed, setIsClosed] = useState(false) // Added flag

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (visible) {
      setShouldRender(true)
    } else if (!visible && shouldRender) {
      setIsClosing(true)
      const timer = setTimeout(() => {
        setIsClosing(false)
        setShouldRender(false)
        if (!isClosed) {
          onClose() // Only call onClose if it hasn't been called yet
          setIsClosed(true) // Mark as closed
        }
      }, 300) // Match animation duration
      return () => clearTimeout(timer)
    }
  }, [visible, shouldRender, isClosed])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
    // Listen for the Escape key press
    window.addEventListener('keydown', handleEscape)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, []) // Empty dependency array ensures this effect runs once on mount

  const handleClose = () => {
    onClose()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const modalContent = shouldRender && (
    <div
      className={`${styles.modal_overlay} ${isClosing ? styles.modal_overlay_exit : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.modal_exit : ''}`}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal_header}>
          <h1 className={styles.modal_title}>{title}</h1>
          <Image
            className="size-4 cursor-pointer"
            src={imagePath.common.closeIcon}
            alt="close-icon"
            onClick={handleClose}
          />
        </div>
        <div className={styles.modal_body}>{children}</div>
        {footer && <div className={styles.modal_footer}>{footer}</div>}
      </div>
    </div>
  )

  if (!isClient) {
    return null
  }

  return createPortal(modalContent, document.body)
}

export default CustomModal
