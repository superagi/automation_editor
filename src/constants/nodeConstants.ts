import { NodeCategory } from '@/types'
import imagePath from '@/constants/imagePath'

export const nodes: NodeCategory[] = [
  {
    type: 'engage',
    label: 'Engage',
    options: [
      {
        id: 'email',
        label: 'Email',
        icon: imagePath.unselected.email,
      },
      {
        id: 'add_to_sequence',
        label: 'Add to Sequence',
        icon: imagePath.unselected.sequence,
      },
    ],
  },
  {
    type: 'crm',
    label: 'CRM',
    options: [
      {
        id: 'create_task',
        label: 'Create Task',
        icon: imagePath.unselected.createTask,
      },
      {
        id: 'add_to_list',
        label: 'Add to List',
        icon: imagePath.unselected.list,
      },
      {
        id: 'add_note',
        label: 'Add Note',
        icon: imagePath.unselected.notes,
      },
      {
        id: 'update_entity',
        label: 'Update Entity',
        icon: imagePath.unselected.updateEntity,
      },
      {
        id: 'market_research',
        label: 'Market Research',
        icon: imagePath.neutral.marketResearchIcon,
      },
    ],
  },
  {
    type: 'operation',
    label: 'Operation',
    options: [
      {
        id: 'time_delay',
        label: 'Time Delay',
        icon: imagePath.unselected.timeDelay,
      },
      {
        id: 'if_else',
        label: 'If / else',
        icon: imagePath.unselected.ifElse,
      },
    ],
  },
  {
    type: 'internal',
    label: 'Internal',
    options: [
      {
        id: 'email_notification',
        label: 'Email Notification',
        icon: imagePath.unselected.emailNotification,
      },
      {
        id: 'slack_notification',
        label: 'Slack Notification',
        icon: imagePath.neutral.slackIcon,
      },
    ],
  },
]
