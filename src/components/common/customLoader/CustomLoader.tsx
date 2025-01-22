import React from 'react'
import styles from './styles.module.css'
import { CustomLoaderProps } from './type'

const CustomLoader: React.FC<CustomLoaderProps> = ({
  size = 40,
  text = 'Loading..',
  borderWidth = 4,
}) => {
  return (
    <div
      id="loader"
      className="w-fit flex flex-row justify-center items-center gap-2"
    >
      <div
        className={styles.default_spinner}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${borderWidth}px`,
          borderTopWidth: `${borderWidth}px`,
        }}
      ></div>
      {text && (
        <span className="text-base text-white proxima_nova">{text}</span>
      )}
    </div>
  )
}

export default CustomLoader
