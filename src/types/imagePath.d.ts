import { StaticImageData } from 'next/image'

interface SelectedIcons {
  email: StaticImageData
  updateEntity: StaticImageData
}

interface UnselectedIcons {
  email: StaticImageData
  updateEntity: StaticImageData
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
}

export interface AppIcons {
  selected: SelectedIcons
  unselected: UnselectedIcons
  common: CommonIcons
}
