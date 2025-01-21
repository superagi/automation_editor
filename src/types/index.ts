import { StaticImageData } from 'next/image'

export interface OutputItem {
  label: string
}

export interface NodeCategory {
  type: string
  label: string
  options: NodeOption[]
}

export interface NodeOption {
  id:
    | 'email'
    | 'linkedin_message'
    | 'linkedin_in_mail'
    | 'linkedin_connections'
    | 'update_entity'
    | 'trigger'
  label: string
  icon: StaticImageData
  outputArray: OutputItem[]
}
