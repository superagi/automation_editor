// types.ts
export interface DropdownProps {
  onHover?: boolean
  maxHeight?: string // Changed from string | null to optional string
  gap?: string
  position?:
    | 'start'
    | 'end'
    | 'center'
    | 'top'
    | 'topstart'
    | 'topend'
    | 'left'
    | 'right'
  show?: boolean
  dropdownCSS?: string
  relativeToViewport?: boolean
  disabled?: boolean
  overflowY?: 'scroll' | 'auto' | 'hidden' | 'visible'
  width?: string
  onClose?: () => void
  onTriggerClick?: (data: { isOpen: boolean; event: string }) => void
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export interface CustomCSSProperties extends React.CSSProperties {
  '--dropdown-position'?: string
}
