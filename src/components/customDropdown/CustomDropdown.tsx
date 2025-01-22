'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import { DropdownProps, CustomCSSProperties } from './type'

const CustomDropdown: React.FC<DropdownProps> = ({
  onHover = false,
  maxHeight, // Remove default value
  gap, // Remove default value
  position = 'start',
  show = true,
  dropdownCSS = 'p-2',
  relativeToViewport = false,
  disabled = false,
  overflowY = 'scroll',
  width = '',
  onClose,
  onTriggerClick,
  children,
  trigger,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<CustomCSSProperties>(
    {}
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown()
    }
  }

  const handleTrigger = () => {
    if (disabled) return

    onTriggerClick?.({
      isOpen,
      event: 'click',
    })

    if (isOpen) {
      closeDropdown()
    } else {
      setIsOpen(true)
    }
  }

  const closeDropdown = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
      onClose?.()
    }, 100)
  }

  const updateDropdownPosition = () => {
    const rect = dropdownRef.current?.getBoundingClientRect()
    const triggerRect =
      dropdownRef.current?.parentElement?.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth

    if (relativeToViewport && rect && triggerRect) {
      const intendedPosition: { [key: string]: CustomCSSProperties } = {
        bottom_start: {
          top: `${triggerRect.bottom}px`,
          left: `${triggerRect.left}px`,
        },
        bottom_end: {
          top: `${triggerRect.bottom}px`,
          right: `${viewportWidth - triggerRect.right}px`,
          left: 'auto',
        },
        bottom_center: {
          top: `${triggerRect.bottom}px`,
          left: `${triggerRect.left + triggerRect.width / 2 - rect.width / 2}px`,
        },
        top_start: {
          top: `${triggerRect.top - rect.height}px`,
          left: `${triggerRect.left}px`,
        },
        top_center: {
          top: `${triggerRect.top - rect.height}px`,
          left: `${triggerRect.left + triggerRect.width / 2 - rect.width / 2}px`,
        },
        top_end: {
          top: `${triggerRect.top - rect.height}px`,
          left: `${triggerRect.right - rect.width}px`,
        },
        left: {
          top: `${triggerRect.top}px`,
          left: `${triggerRect.left - rect.width}px`,
        },
        right: {
          top: `${triggerRect.top}px`,
          left: `${triggerRect.right}px`,
        },
      }

      let newPosition = { ...intendedPosition[position] }

      if (parseInt(newPosition.top as string) + rect.height > viewportHeight) {
        newPosition.top = `${triggerRect.top - rect.height + 50}px`
      }

      if (position === 'end') {
        const rightEdge =
          viewportWidth - (parseInt(newPosition.right as string) || 0)
        if (rightEdge - rect.width < 0) {
          newPosition.right = `${viewportWidth - triggerRect.left}px`
        }
      } else {
        if (parseInt(newPosition.left as string) + rect.width > viewportWidth) {
          newPosition.left = `${triggerRect.right - rect.width}px`
        } else if (parseInt(newPosition.left as string) < 0) {
          newPosition.left = `${triggerRect.left}px`
        }
      }

      setDropdownPosition(newPosition)
    } else {
      const positions: { [key: string]: CustomCSSProperties } = {
        bottom_start: { left: '0' },
        bottom_end: { right: '0', left: 'auto' },
        bottom_center: { left: '50%', transform: 'translateX(-50%)' },
        top_start: { bottom: '100%', left: '0' },
        top_center: {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        top_end: { bottom: '100%', right: '0' },
        left: { right: '100%', top: '0' },
        right: { left: '100%', top: '0' },
      }

      setDropdownPosition(positions[position])
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition()
    }
  }, [isOpen, position, relativeToViewport])

  const dropdownStyle: CustomCSSProperties = {
    ...(maxHeight ? { maxHeight } : {}),
    overflowY,
    ...(position.startsWith('top')
      ? { marginBottom: gap }
      : position === 'left' || position === 'right'
        ? { margin: `0 ${gap}` }
        : { marginTop: gap }),
    ...dropdownPosition,
    '--dropdown-position': relativeToViewport ? 'fixed' : 'absolute',
  }

  return (
    <div
      className={`${styles.dropdown_container} ${disabled ? styles.dropdown_disabled : ''} ${width || 'w-fit'}`}
      onMouseEnter={() => onHover && !disabled && setIsOpen(true)}
      onMouseLeave={() => onHover && closeDropdown()}
    >
      {show && (
        <div
          className={`${styles.trigger_container} ${width}`}
          onClick={handleTrigger}
        >
          {trigger}
        </div>
      )}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`${styles.dropdown} ${isClosing ? styles.fade_out : ''} ${
            position.includes('center') && 'bottom_center'
              ? styles.bottom_center
              : ''
          } ${position === 'top_start' ? styles.top_start : ''} ${
            position === 'top_start' ? styles.top_start : ''
          } ${position === 'top_end' ? styles.top_end : ''} ${
            position === 'left' ? styles.left : ''
          } ${position === 'right' ? styles.right : ''} ${dropdownCSS}`}
          style={dropdownStyle}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
