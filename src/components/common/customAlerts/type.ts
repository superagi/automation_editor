export interface MessageProps {
  source: string
  type: 'info' | 'warning'
  title?: string
  description?: string
  children?: React.ReactNode
}
