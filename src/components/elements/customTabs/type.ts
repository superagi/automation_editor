export interface Tab {
  title: string
  selected?: string
  unselected?: string
  count?: number
}

export interface CustomTabProps {
  initialActiveTab?: number
  tabs: Tab[]
  modelValue: number
  showTransition?: boolean
  height?: string
  mountAllTabsInitially?: boolean
  contentPadding?: string
  extraHeaderStyles?: string
  onTabSelected: (title: string) => void
  onModelValueUpdate: (index: number) => void
}
