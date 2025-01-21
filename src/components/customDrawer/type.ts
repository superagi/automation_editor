export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  direction?: 'top' | 'bottom' | 'left' | 'right'
  top?: string
  width?: string
  contentClassName?: string
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  subtitle?: React.ReactNode
}
