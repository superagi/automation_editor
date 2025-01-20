import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface LinkedinConnectionsNodeProps {
  data: NodeOption
}

const outputs = ['Invite accepted']

export function LinkedinConnectionsNode({
  data,
}: LinkedinConnectionsNodeProps) {
  return (
    <CustomNode
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
