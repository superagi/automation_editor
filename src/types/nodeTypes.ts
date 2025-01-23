import { EmailNode } from '@/components/engage/email/EmailNode'
import { UpdateEntityNode } from '@/components/crm/entity/UpdateEntityNode'
import { TriggerNode } from '@/components/trigger/TriggerNode'
import { AddToSequenceNode } from '@/components/engage/sequence/AddToSequenceNode'
import { CreateTaskNode } from '@/components/crm/task/CreateTaskNode'
import { AddToListNode } from '@/components/crm/list/AddToListNode'
import { MarketResearchNode } from '@/components/crm/market_research/MarketResearchNode'
import { TimeDelayNode } from '@/components/operation/time_delay/TimeDelayNode'
import { IfElseNode } from '@/components/operation/if_else/IfElseNode'

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
