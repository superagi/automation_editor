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

interface CommonIcons {
  backArrow: StaticImageData
  linkedin: StaticImageData
  searchEmptyScreen: StaticImageData
  chartAndTableEmptyScreen: StaticImageData
  callLogsEmptyScreen: StaticImageData
  callQualityEmptyScreen: StaticImageData
  emptyScreen: StaticImageData
  closeIcon: StaticImageData
  tableLoader: StaticImageData
  chartLoader: StaticImageData
  dragIcon: StaticImageData
  crossIcon: StaticImageData
  flagIcon: StaticImageData
}

export interface AppIcons {
  selected: IconSet
  unselected: IconSet
  neutral: NeutralIcons
  common: CommonIcons
}
