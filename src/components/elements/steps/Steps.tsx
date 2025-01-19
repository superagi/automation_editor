import styles from './steps.module.css'
import { NodeData } from '@/types'
import imagePath from '@/constants/imagePath'
import Image from 'next/image'

const nodeData: NodeData[] = [
  {
    id: 'email',
    label: 'Email',
    icon: imagePath.unselected.email,
    outputArray: [{ label: 'true' }],
  },
  {
    id: 'linkedin_message',
    label: 'Linkedin Message',
    icon: imagePath.common.linkedin,
    outputArray: [],
  },
  {
    id: 'linkedin_in_mail',
    label: 'Linkedin InMail',
    icon: imagePath.common.linkedin,
    outputArray: [],
  },
  {
    id: 'linkedin_connections',
    label: 'Linkedin Connections',
    icon: imagePath.common.linkedin,
    outputArray: [],
  },
  {
    id: 'update_entity',
    label: 'Update Entity',
    icon: imagePath.unselected.updateEntity,
    outputArray: [],
  },
]

export default function Steps() {
  const onDragStart = (event: React.DragEvent, nodeData: NodeData) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(nodeData)
    )
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside
      className={`${styles.steps_container} w-64 h-full text-white proxima_nova`}
    >
      <div
        className={'flex flex-row items-center gap-3 py-3 px-4 border_bottom'}
      >
        <span>Steps</span>
      </div>

      <div className="flex flex-col gap-2 py-4 px-2">
        {nodeData?.map((node, id) => (
          <div
            key={id}
            className={`${styles.step_option} flex flex-row items-center cursor-move`}
            onDragStart={(event) => onDragStart(event, node)}
            draggable
          >
            <Image
              className={'size-4'}
              src={node?.icon}
              alt={`${node?.id}_icon`}
            />
            <span>{node?.label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
