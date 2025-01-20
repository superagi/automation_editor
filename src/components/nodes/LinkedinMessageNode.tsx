import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface LinkedinMessageNodeProps {
  data: NodeOption
}

const outputs = ['Message sent', 'Failed to send']

export function LinkedinMessageNode({ data }: LinkedinMessageNodeProps) {
  return (
    <CustomNode
      data={data}
      title="LinkedIn Message"
      icon={imagePath.common.linkedin}
      outputs={outputs}
    >
      <textarea
        placeholder="Message"
        className="w-full bg-gray-700 p-2 rounded"
      />
    </CustomNode>
  )
}
