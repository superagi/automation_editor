import { useState } from 'react'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface IfElseNodeProps {
  id: string
  data: NodeOption
}

export function IfElseNode({ data, id }: IfElseNodeProps) {
  const [filters, setFilters] = useState('')

  return (
    <CustomNode
      id={id}
      data={data}
      title="If / else"
      icon={imagePath.selected.list}
      outputs={['Is True', 'Is False']}
    >
      <div id={'if_else_node_content'} className={'flex flex-col'}>
        <InfoItem
          source={'if_else_node'}
          title={'Filters'}
          value={`${filters?.length} filters`}
        />
      </div>
    </CustomNode>
  )
}
