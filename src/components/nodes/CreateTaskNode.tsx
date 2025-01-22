import { useState } from 'react'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface CreateTaskNodeProps {
  id: string
  data: NodeOption
}

export function CreateTaskNode({ data, id }: CreateTaskNodeProps) {
  const [taskName, setTaskName] = useState('')

  return (
    <CustomNode
      id={id}
      data={data}
      title="Create Task"
      icon={imagePath.selected.createTask}
    >
      <div id={'create_task_node_content'} className={'flex flex-col'}>
        <InfoItem
          source={'create_task_node'}
          title={'Task Name'}
          value={taskName}
        />
      </div>
    </CustomNode>
  )
}
