export interface Header {
  icon?: string
  size?: string
  alt?: string
  title: string
  description?: string
  execute?: () => void
  emptyText?: string
}

export interface CustomContainerProps {
  header?: Header | null
  padding?: string
  height?: string
  previewLeadsCount?: number | null
  showAddButton?: boolean
  noBackgroundColor?: boolean
  showEmptyScreen?: boolean
  overflowY?: string
  children?: React.ReactNode
}
