import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface TriggerNodeProps {
  id: string
  data: NodeOption
}

const outputs = ['Next']

export function TriggerNode({ data, id }: TriggerNodeProps) {
  return (
    <CustomNode
      id={id}
      data={data}
      title="Trigger"
      icon={imagePath.common.flagIcon}
      outputs={outputs}
    >
      hello
    </CustomNode>
  )
}
