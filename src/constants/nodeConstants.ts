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
        size: 16,
      },
      {
        id: 'add_to_sequence',
        label: 'Add to Sequence',
        icon: imagePath.unselected.sequence,
        size: 16,
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
        size: 16,
      },
      {
        id: 'add_to_list',
        label: 'Add to List',
        icon: imagePath.unselected.list,
        size: 16,
      },
      {
        id: 'add_note',
        label: 'Add Note',
        icon: imagePath.unselected.notes,
        size: 16,
      },
      {
        id: 'update_entity',
        label: 'Update Entity',
        icon: imagePath.unselected.updateEntity,
        size: 16,
      },
      {
        id: 'market_research',
        label: 'Market Research',
        icon: imagePath.neutral.marketResearchIcon,
        size: 16,
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
        size: 16,
      },
      {
        id: 'if_else',
        label: 'If / else',
        icon: imagePath.unselected.ifElse,
        size: 16,
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
        size: 16,
      },
      {
        id: 'slack_notification',
        label: 'Slack Notification',
        icon: imagePath.neutral.slackIcon,
        size: 12,
      },
    ],
  },
]
