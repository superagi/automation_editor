import { EmailNode } from '@/components/nodes/EmailNode'
import { LinkedinMessageNode } from '@/components/nodes/LinkedinMessageNode'
import { LinkedinInMailNode } from '@/components/nodes/LinkedinInMailNode'
import { LinkedinConnectionsNode } from '@/components/nodes/LinkedinConnectionsNode'
import { UpdateEntityNode } from '@/components/nodes/UpdateEntityNode'

export const nodeTypes = {
  email: EmailNode,
  linkedin_message: LinkedinMessageNode,
  linkedin_in_mail: LinkedinInMailNode,
  linkedin_connections: LinkedinConnectionsNode,
  update_entity: UpdateEntityNode,
}
