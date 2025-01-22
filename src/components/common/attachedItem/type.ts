export interface CustomAttachmentItemProps {
  id: string
  fileName: string
  fileSize: number
  downloadable: boolean
  isLoading?: boolean
  onRemove: (id: string) => void
}
