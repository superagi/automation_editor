import { StaticImageData } from 'next/image'

interface IconSet {
  email: StaticImageData
  sequence: StaticImageData
  createTask: StaticImageData
  updateEntity: StaticImageData
  notes: StaticImageData
  list: StaticImageData
  timeDelay: StaticImageData
  ifElse: StaticImageData
  emailNotification: StaticImageData
}

interface NeutralIcons {
  slackIcon: StaticImageData
  marketResearchIcon: StaticImageData
}

interface AlertIcons {
  yellowAlert: StaticImageData
}

interface EmptyScreenIcons {
  emptyScreen: StaticImageData
  searchEmptyScreen: StaticImageData
  chartAndTableEmptyScreen: StaticImageData
  callLogsEmptyScreen: StaticImageData
  callQualityEmptyScreen: StaticImageData
}

interface CommonIcons {
  emptyScreenIcons: EmptyScreenIcons
  backArrow: StaticImageData
  linkedin: StaticImageData
  closeIcon: StaticImageData
  tableLoader: StaticImageData
  chartLoader: StaticImageData
  dragIcon: StaticImageData
  crossIcon: StaticImageData
  triggerNodeTitleIcon: StaticImageData
  downloadIcon: StaticImageData
  attachFileIcon: StaticImageData
  infoIcon: StaticImageData
  warningIcon: StaticImageData
}

export interface AppIcons {
  selected: IconSet
  unselected: IconSet
  neutral: NeutralIcons
  common: CommonIcons
  alert: AlertIcons
}
