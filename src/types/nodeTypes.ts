import { EmailNode } from '@/components/nodes/EmailNode'
import { UpdateEntityNode } from '@/components/nodes/UpdateEntityNode'
import { TriggerNode } from '@/components/nodes/TriggerNode'
import { AddToSequenceNode } from '@/components/nodes/AddToSequenceNode'
import { CreateTaskNode } from '@/components/nodes/CreateTaskNode'
import { AddToListNode } from '@/components/nodes/AddToListNode'
import { MarketResearchNode } from '@/components/nodes/MarketResearchNode'
import { TimeDelayNode } from '@/components/nodes/TimeDelayNode'
import { IfElseNode } from '@/components/nodes/IfElseNode'

export const nodeTypes = {
  trigger: TriggerNode,
  email: EmailNode,
  add_to_sequence: AddToSequenceNode,
  create_task: CreateTaskNode,
  update_entity: UpdateEntityNode,
  add_to_list: AddToListNode,
  market_research: MarketResearchNode,
  time_delay: TimeDelayNode,
  if_else: IfElseNode,
}
