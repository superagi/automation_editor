import { EmailNode } from '@/components/nodes/EmailNode'
import { UpdateEntityNode } from '@/components/nodes/UpdateEntityNode'
import { TriggerNode } from '@/components/nodes/TriggerNode'
import { AddToSequenceNode } from '@/components/nodes/AddToSequenceNode'
import { CreateTaskNode } from '@/components/nodes/CreateTaskNode'

export const nodeTypes = {
  trigger: TriggerNode,
  email: EmailNode,
  add_to_sequence: AddToSequenceNode,
  create_task: CreateTaskNode,
  update_entity: UpdateEntityNode,
}
