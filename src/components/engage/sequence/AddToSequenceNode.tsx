import { useState } from 'react'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'

interface AddToSequenceNodeProps {
  id: string
  data: NodeOption
}

export function AddToSequenceNode({ data, id }: AddToSequenceNodeProps) {
  const [sequence, setSequence] = useState('')

  return (
    <CustomNode
      id={id}
      data={data}
      title="Add to Sequence"
      icon={imagePath.selected.sequence}
    >
      <div id={'add_to_sequence_node_content'} className={'flex flex-col'}>
        <InfoItem
          source={'add_to_sequence_node'}
          title={'Sequence'}
          value={sequence}
        />
      </div>
    </CustomNode>
  )
}
