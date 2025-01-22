export interface ModalProps {
  title: string
  visible: boolean
  width?: string
  onClose: () => void
  children?: React.ReactNode
  footer?: React.ReactNode
}
