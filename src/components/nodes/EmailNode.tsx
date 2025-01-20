import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface EmailNodeProps {
  data: NodeOption
}

const outputs = ['Delivered', 'Not delivered', 'Replied', 'Not replied']

export function EmailNode({ data }: EmailNodeProps) {
  return (
    <CustomNode
      data={data}
      title="Email"
      icon={imagePath.unselected.email}
      outputs={outputs}
    >
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-gray-700 p-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full bg-gray-700 p-2 rounded"
        />
      </div>
    </CustomNode>
  )
}
