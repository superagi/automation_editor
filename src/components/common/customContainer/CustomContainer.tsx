import React from 'react'
import styles from './styles.module.css'
import { CustomContainerProps } from './type'
import EmptyScreen from '../emptyScreen/EmptyScreen'

const CustomContainer: React.FC<CustomContainerProps> = ({
  header,
  padding = 'p-2',
  height = '',
  previewLeadsCount = null,
  showAddButton = true,
  noBackgroundColor = false,
  showEmptyScreen = false,
  overflowY = '',
  children,
}) => {
  return (
    <div
      className={`${styles.custom_container} ${noBackgroundColor ? styles.no_background : ''} ${height} ${overflowY}`}
    >
      {header && (
        <div
          id="custom_container_header"
          className={styles.custom_container_header}
        >
          <div className="flex flex-row gap-[6px] items-center text-sm text-white">
            {header.icon && (
              <img
                className={header.size || 'size-4'}
                src={header.icon}
                alt={header.alt}
              />
            )}
            <div className="flex flex-col justify-center">
              <span className="font-medium">{header.title}</span>
              {header.description && (
                <span className="text-xs secondary_color">
                  {header.description}
                </span>
              )}
            </div>
          </div>

          {children && children}
          {!children && header.execute && showAddButton && (
            <span
              className="secondary_color font-normal cursor-pointer"
              onClick={header.execute}
            >
              + Add
            </span>
          )}
          {previewLeadsCount !== null && (
            <span className="text-sm secondary_color">
              {previewLeadsCount} estimates
            </span>
          )}
        </div>
      )}

      <div className={`flex flex-col w-full h-full ${padding}`}>
        {!showEmptyScreen ? (
          children
        ) : (
          <div className="mt-14 mb-16">
            <EmptyScreen source="custom_container" text={header?.emptyText} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomContainer
