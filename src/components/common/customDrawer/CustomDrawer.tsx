// CustomDrawer.tsx
import React, { useEffect, useRef } from 'react'
import { DrawerProps } from './type'
import styles from './styles.module.css'
import Image from 'next/image'
import imagePath from '@/constants/imagePath'

const CustomDrawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  direction = 'bottom',
  top = '50px',
  width = '100%',
  contentClassName = '',
  title = '',
  children,
  footer,
  subtitle,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const setViewportHeight = () => {
      // Check if visualViewport exists and has a height property
      const viewportHeight = window.visualViewport?.height

      if (typeof viewportHeight === 'number' && viewportHeight <= 500) {
        window.scrollTo({ top: 0 })
        document.documentElement.style.setProperty(
          '--drawer-max-height',
          '60vh'
        )
      } else {
        document.documentElement.style.setProperty('--drawer-max-height', '90%')
      }
    }

    window.addEventListener('resize', setViewportHeight)

    // Only add visualViewport listener if it exists
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setViewportHeight)
    }

    setViewportHeight()

    return () => {
      window.removeEventListener('resize', setViewportHeight)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setViewportHeight)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('width')
    }

    return () => {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('width')
    }
  }, [isOpen])

  const containerClasses = [
    styles.drawer_container,
    isOpen ? styles.open : styles.closed,
    styles[direction],
  ].join(' ')

  const contentStyle = {
    top,
    width,
    height: `calc(100% - ${top})`,
  }

  return (
    <div className={containerClasses} ref={drawerRef}>
      <div className={styles.drawer_backdrop} onClick={onClose} />
      <div
        className={`${styles.drawer_content} bg-dark ${contentClassName}`}
        style={contentStyle}
      >
        <div className={styles.drawer_header}>
          <div className="flex flex-col">
            {title.trim() !== '' && <h3>{title}</h3>}
            {subtitle}
          </div>
          <Image
            src={imagePath?.common?.closeIcon} // Update with your close icon path
            alt="close_icon"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className={styles.drawer_body}>{children}</div>
        {footer && <div className={styles.drawer_footer}>{footer}</div>}
      </div>
    </div>
  )
}

export default CustomDrawer
