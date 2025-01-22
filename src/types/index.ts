import { StaticImageData } from 'next/image'

export interface NodeCategory {
  type: string
  label: string
  options: NodeOption[]
}

export interface NodeOption {
  id:
    | 'email'
    | 'add_to_sequence'
    | 'create_task'
    | 'add_to_list'
    | 'add_note'
    | 'update_entity'
    | 'market_research'
    | 'time_delay'
    | 'if_else'
    | 'email_notification'
    | 'slack_notification'
  label: string
  icon: StaticImageData
}
