import React from 'react'
import { EmptyScreenProps } from './type'
import { emptyScreenTypes } from '@/constants/searchConstatnts'

const EmptyScreen: React.FC<EmptyScreenProps> = ({
  source,
  text = 'No results found!',
  css = 'size-[72px]',
  type = emptyScreenTypes.DEFAULT,
  padding = 'my-10',
}) => {
  //   const getImagePath = () => {
  //     switch (type) {
  //       case emptyScreenTypes.SEARCH:
  //         return imagePath.searchEmptyScreen
  //       case emptyScreenTypes.CHART_AND_TABLE:
  //         return imagePath.chartAndTableEmptyScreen
  //       case emptyScreenTypes.CALL_LOGS:
  //         return imagePath.callLogsEmptyScreen
  //       case emptyScreenTypes.CALL_QUALITY:
  //         return imagePath.callQualityEmptyScreen
  //       case emptyScreenTypes.DEFAULT:
  //       default:
  //         return imagePath.emptyScreen
  //     }
  //   }

  return (
    <div id={source} className={`flex flex-col items-center gap-2 ${padding}`}>
      {/* <img className={css} src={getImagePath()} alt="empty_screen" /> */}
      <span className="text-white text-base proxima_nova opacity-60 font-normal">
        {text}
      </span>
    </div>
  )
}

export default EmptyScreen
