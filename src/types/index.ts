import { StaticImageData } from 'next/image'

export interface OutputItem {
  label: string
}

export interface NodeData {
  id:
    | 'email'
    | 'linkedin_message'
    | 'linkedin_in_mail'
    | 'linkedin_connections'
    | 'update_entity'
  label: string
  icon: StaticImageData
  outputArray: OutputItem[]
}
