import { useState } from 'react'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface AddToListNodeProps {
  id: string
  data: NodeOption
}

export function AddToListNode({ data, id }: AddToListNodeProps) {
  const [listName, setListName] = useState('')

  return (
    <CustomNode
      id={id}
      data={data}
      title="Add to List"
      icon={imagePath.selected.list}
    >
      <div id={'add_to_list_node_content'} className={'flex flex-col'}>
        <InfoItem source={'add_to_list_node'} title={'List'} value={listName} />
      </div>
    </CustomNode>
  )
}
