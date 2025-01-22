import React from 'react'
import { EmptyScreenProps } from './type'
import { emptyScreenTypes } from '@/constants/searchConstants'
import imagePath from '@/constants/imagePath'
import Image from 'next/image'

const EmptyScreen: React.FC<EmptyScreenProps> = ({
  source,
  text = 'No results found!',
  css = 'size-[72px]',
  type = emptyScreenTypes.DEFAULT,
  padding = 'my-10',
}) => {
  const getImagePath = () => {
    switch (type) {
      case emptyScreenTypes.SEARCH:
        return imagePath.common.searchEmptyScreen
      case emptyScreenTypes.CHART_AND_TABLE:
        return imagePath.common.chartAndTableEmptyScreen
      case emptyScreenTypes.CALL_LOGS:
        return imagePath.common.callLogsEmptyScreen
      case emptyScreenTypes.CALL_QUALITY:
        return imagePath.common.callQualityEmptyScreen
      case emptyScreenTypes.DEFAULT:
      default:
        return imagePath.common.emptyScreen
    }
  }

  return (
    <div id={source} className={`flex flex-col items-center gap-2 ${padding}`}>
      <Image className={css} src={getImagePath()} alt="empty_screen" />
      <span className="text-white text-base proxima_nova opacity-60 font-normal">
        {text}
      </span>
    </div>
  )
}

export default EmptyScreen
