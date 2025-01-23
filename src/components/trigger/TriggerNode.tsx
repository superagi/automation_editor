import { useState } from 'react'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface TriggerNodeProps {
  id: string
  data: NodeOption
}

export function TriggerNode({ data, id }: TriggerNodeProps) {
  const [triggerEvent, setTriggerEvent] = useState('')

  return (
    <CustomNode
      id={id}
      data={data}
      title="Trigger"
      icon={imagePath.common.flagIcon}
    >
      <div id={'trigger_node_content'} className={'flex flex-col'}>
        <InfoItem
          source={'trigger_node'}
          title={'Trigger event'}
          value={triggerEvent}
        />
      </div>
    </CustomNode>
  )
}
