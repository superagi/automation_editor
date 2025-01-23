import { useState } from 'react'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface TimeDelayNodeProps {
  id: string
  data: NodeOption
}

interface TimeDelayNodeData {
  delay_type?: string
  delay_date?: string
  delay_time?: string
}

export function TimeDelayNode({ data, id }: TimeDelayNodeProps) {
  const [nodeData, setNodeData] = useState<TimeDelayNodeData>({})

  return (
    <CustomNode
      id={id}
      data={data}
      title="Time Delay"
      icon={imagePath.selected.timeDelay}
    >
      <div id={'time_delay_node_content'} className={'flex flex-col gap-4'}>
        <InfoItem
          source={'time_delay_node'}
          title={'Delay type'}
          value={nodeData.delay_type}
        />

        <InfoItem
          source={'time_delay_node'}
          title={'Date of delay'}
          value={nodeData.delay_date}
        />

        <InfoItem
          source={'time_delay_node'}
          title={'Time of delay'}
          value={nodeData.delay_time}
        />
      </div>
    </CustomNode>
  )
}
