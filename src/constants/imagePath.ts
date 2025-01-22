import { AppIcons } from '@/types/imagePath'

import emailSelected from '@/assets/images/selected/email.svg'
import emailUnselected from '@/assets/images/unselected/email.svg'
import sequenceSelected from '@/assets/images/selected/sequence.svg'
import sequenceUnselected from '@/assets/images/unselected/sequence.svg'
import createTaskSelected from '@/assets/images/selected/create_task.svg'
import createTaskUnselected from '@/assets/images/unselected/create_task.svg'
import updateEntitySelected from '@/assets/images/selected/update_entity.svg'
import updateEntityUnselected from '@/assets/images/unselected/update_entity.svg'
import notesSelected from '@/assets/images/selected/notes.svg'
import notesUnselected from '@/assets/images/unselected/notes.svg'
import listSelected from '@/assets/images/selected/list.svg'
import listUnselected from '@/assets/images/unselected/list.svg'
import timeDelaySelected from '@/assets/images/selected/time_delay.svg'
import timeDelayUnselected from '@/assets/images/unselected/time_delay.svg'
import ifElseSelected from '@/assets/images/selected/if_else.svg'
import ifElseUnselected from '@/assets/images/unselected/if_else.svg'
import emailNotificationSelected from '@/assets/images/selected/email_notification.svg'
import emailNotificationUnselected from '@/assets/images/unselected/email_notification.svg'
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
import crossIcon from '@/assets/images/common/cross_icon.svg'
import slackIcon from '@/assets/images/neutral/slack_icon.svg'
import marketResearchIcon from '@/assets/images/neutral/market_research_icon.svg'
import flagIcon from '@/assets/images/common/flag_icon.svg'

export const imagePath: AppIcons = {
  selected: {
    email: emailSelected,
    sequence: sequenceSelected,
    createTask: createTaskSelected,
    updateEntity: updateEntitySelected,
    notes: notesSelected,
    list: listSelected,
    timeDelay: timeDelaySelected,
    ifElse: ifElseSelected,
    emailNotification: emailNotificationSelected,
  },
  unselected: {
    email: emailUnselected,
    sequence: sequenceUnselected,
    createTask: createTaskUnselected,
    updateEntity: updateEntityUnselected,
    notes: notesUnselected,
    list: listUnselected,
    timeDelay: timeDelayUnselected,
    ifElse: ifElseUnselected,
    emailNotification: emailNotificationUnselected,
  },
  neutral: {
    slackIcon: slackIcon,
    marketResearchIcon: marketResearchIcon,
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
    crossIcon: crossIcon,
    flagIcon: flagIcon,
  },
}

export default imagePath
