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
        <select className="w-full bg-gray-700 p-2 rounded">
          <option>Select Entity</option>
          <option>Contact</option>
          <option>Company</option>
        </select>
        <input
          type="text"
          placeholder="Field"
          className="w-full bg-gray-700 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Value"
          className="w-full bg-gray-700 p-2 rounded"
        />
      </div>
    </CustomNode>
  )
}
