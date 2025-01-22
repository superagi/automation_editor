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
  dragIcon: StaticImageData
  crossIcon: StaticImageData
}

export interface AppIcons {
  selected: IconSet
  unselected: IconSet
  neutral: NeutralIcons
  common: CommonIcons
}
