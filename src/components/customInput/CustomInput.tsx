import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { CustomInputType } from './type'
import { focusDelay } from '@/constants/commonContants'

const types: any = {
  primary: {
    css: styles.primary_input,
    text: styles.primary_input_field,
  },
  secondary: {
    css: styles.secondary_input,
    text: styles.secondary_input_field,
  },
}

const CustomInput = ({
  format,
  value,
  onChange,
  placeholder,
  errorMessage,
  isError,
  cssClass = '',
  disabled,
  type = 'primary',
  icon,
  size,
  iconCSS,
  alt,
  endIcon,
  endIconSize,
  endIconBackCSS,
  endIconClick,
  autoFocus,
  addAfterOn,
}: CustomInputType) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, focusDelay)
      return () => clearTimeout(timer)
    }
  }, [autoFocus])

  const handleInput = (event: any) => {
    const newValue = event.target.value
    onChange?.(newValue)
  }

  const containerClasses = [
    types[type].css,
    isError ? styles.input_error : '',
    cssClass,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div id="custom_input" className={`${styles.flexColumn} w-full`}>
      <div className={containerClasses}>
        {icon && <img className={`${size} ${iconCSS}`} src={icon} alt={alt} />}
        <input
          ref={inputRef}
          type={format}
          value={value}
          placeholder={placeholder}
          className={`w-full border-0 ${types[type].text} outline-0`}
          disabled={disabled}
          onChange={handleInput}
        />
        {addAfterOn && <div className={styles.addAfterOn}>{addAfterOn}</div>}
        {endIcon && (
          <img
            className={`${endIconSize} ${endIconBackCSS}`}
            src={endIcon}
            alt={alt}
            onClick={endIconClick}
          />
        )}
      </div>
      {isError && errorMessage && (
        <div className={styles.error_message}>{errorMessage}</div>
      )}
    </div>
  )
}

export default CustomInput
