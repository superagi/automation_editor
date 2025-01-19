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
}

export interface AppIcons {
  selected: SelectedIcons
  unselected: UnselectedIcons
  common: CommonIcons
}
