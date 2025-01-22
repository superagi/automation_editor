import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface UpdateEntityNodeProps {
  id: string
  data: NodeOption
}

const outputs = ['Updated', 'Failed']

export function UpdateEntityNode({ data, id }: UpdateEntityNodeProps) {
  return (
    <CustomNode
      id={id}
      data={data}
      title="Update Entity"
      icon={imagePath.unselected.updateEntity}
      outputs={outputs}
    >
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="Field" className="input_medium" />
        <input type="text" placeholder="Value" className="input_medium" />
      </div>
    </CustomNode>
  )
}
