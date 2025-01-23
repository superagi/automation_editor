import styles from './action.module.css'
import { useAutomation } from '@/context/AutomationContext'
import { EmailAction } from '@/components/engage/email/EmailAction'
import { UpdateEntityAction } from '@/components/crm/entity/UpdateEntityAction'
import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import { TriggerAction } from '@/components/trigger/TriggerAction'

export default function AutomationStepActions() {
  const { selectedNode } = useAutomation()

  const renderAction = () => {
    if (!selectedNode || selectedNode.id === 'trigger') return <TriggerAction />
    switch (selectedNode.id) {
      case 'email':
        return <EmailAction />
      case 'update_entity':
        return <UpdateEntityAction />
      default:
        return <div className="p-4">Unknown node type</div>
    }
  }

  return (
    <div
      id={'automation_step_actions'}
      className={`${styles.action_container} flex flex-col rounded-lg text-white overflow-hidden`}
    >
      <div className={'flex-shrink-0 border_bottom w-full'}>
        <div
          className={
            'flex flex-row items-center gap-1 py-3 px-4 overflow-hidden'
          }
        >
          <Image
            className={'size-4'}
            src={selectedNode?.icon || imagePath.common.linkedin}
            alt={`${selectedNode?.id}_icon`}
          />

          <span className="text-sm font-semibold truncate">
            {selectedNode ? selectedNode.label : 'Configuration'}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-w-0 w-full">
        <div className="p-4 max-w-full">{renderAction()}</div>
      </div>
    </div>
  )
}
