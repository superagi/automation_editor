import { EmailNode } from '@/components/nodes/EmailNode'
import { UpdateEntityNode } from '@/components/nodes/UpdateEntityNode'
import { TriggerNode } from '@/components/nodes/TriggerNode'

export const nodeTypes = {
  email: EmailNode,
  update_entity: UpdateEntityNode,
  trigger: TriggerNode,
}
