import { AppIcons } from '@/types/imagePath'

import emailSelected from '@/assets/images/selected/email.svg'
import emailUnselected from '@/assets/images/unselected/email.svg'
import updateEntitySelected from '@/assets/images/selected/update_entity.svg'
import updateEntityUnselected from '@/assets/images/unselected/update_entity.svg'
import backArrow from '@/assets/images/common/back_arrow.svg'
import linkedin from '@/assets/images/common/linkedin.svg'
import searchEmptyScreen from '@/assets/images/common/search_empty_state.svg'
import chartAndTableEmptyScreen from '@/assets/images/common/empty_screen_chart_and_table.svg'
import callLogsEmptyScreen from '@/assets/images/common/empty_screen_call_logs.svg'
import callQualityEmptyScreen from '@/assets/images/common/empty_screen_call_quality.svg'
import emptyScreen from '@/assets/images/common/empty_screen.svg'
import closeIcon from '@/assets/images/common/close_icon.svg'
import chartLoader from '@/assets/images/common/chart_loader.svg'
import tableLoader from '@/assets/images/common/table_loader.svg'
import dragIcon from '@/assets/images/common/drag_icon.svg'

export const imagePath: AppIcons = {
  selected: {
    email: emailSelected,
    updateEntity: updateEntitySelected,
  },
  unselected: {
    email: emailUnselected,
    updateEntity: updateEntityUnselected,
  },
  common: {
    backArrow: backArrow,
    linkedin: linkedin,
    searchEmptyScreen: searchEmptyScreen,
    chartAndTableEmptyScreen: chartAndTableEmptyScreen,
    callLogsEmptyScreen: callLogsEmptyScreen,
    callQualityEmptyScreen: callQualityEmptyScreen,
    emptyScreen: emptyScreen,
    closeIcon: closeIcon,
    tableLoader: tableLoader,
    chartLoader: chartLoader,
    dragIcon: dragIcon,
  },
}

export default imagePath
