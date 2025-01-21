import styles from './action.module.css'
import { useAutomation } from '@/context/AutomationContext'
import { EmailAction } from '@/components/actions/EmailAction'
import { LinkedinMessageAction } from '@/components/actions/LinkedinMessageAction'
import { LinkedinInMailAction } from '@/components/actions/LinkedinInMailAction'
import { LinkedinConnectionsAction } from '@/components/actions/LinkedinConnectionsAction'
import { UpdateEntityAction } from '@/components/actions/UpdateEntityAction'

export default function AutomationStepActions() {
  const { selectedNode } = useAutomation()

  const renderAction = () => {
    if (!selectedNode)
      return <div className="p-4">Select a node to configure</div>

    switch (selectedNode.id) {
      case 'email':
        return <EmailAction />
      case 'linkedin_message':
        return <LinkedinMessageAction />
      case 'linkedin_in_mail':
        return <LinkedinInMailAction />
      case 'linkedin_connections':
        return <LinkedinConnectionsAction />
      case 'update_entity':
        return <UpdateEntityAction />
      default:
        return <div className="p-4">Unknown node type</div>
    }
  }

  return (
    <div
      id={'automation_step_actions'}
      className={`${styles.action_container} w-72 flex flex-col rounded-lg text-white`}
    >
      <div className="border-b border-gray-700 p-4">
        <h2 className="text-lg font-semibold">
          {selectedNode ? selectedNode.label : 'Configuration'}
        </h2>
      </div>
      {renderAction()}
    </div>
  )
}
