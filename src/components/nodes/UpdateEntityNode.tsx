import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import { useState } from 'react'

interface UpdateEntityNodeProps {
  id: string
  data: NodeOption
}

export function UpdateEntityNode({ data, id }: UpdateEntityNodeProps) {
  const [updateFor, setUpdateFor] = useState('')

  return (
    <CustomNode
      id={id}
      data={data}
      title="Update Entity"
      icon={imagePath.selected.updateEntity}
    >
      <div id={'update_entity_node_content'} className={'flex flex-col'}>
        <InfoItem
          source={'update_entity_node'}
          title={'Update for'}
          value={updateFor}
        />
      </div>
    </CustomNode>
  )
}
