import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface LinkedinConnectionsNodeProps {
  id: string
  data: NodeOption
}

const outputs = ['Invite accepted']

export function LinkedinConnectionsNode({
  data,
  id,
}: LinkedinConnectionsNodeProps) {
  return (
    <CustomNode
      id={id}
      data={data}
      title="LinkedIn Connection"
      icon={imagePath.common.linkedin}
      outputs={outputs}
    >
      <input
        type="text"
        placeholder="Note"
        className="w-full bg-gray-700 p-2 rounded"
      />
    </CustomNode>
  )
}
