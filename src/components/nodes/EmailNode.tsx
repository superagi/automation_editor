import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/nodes/CustomNode'
import { NodeOption } from '@/types'

interface EmailNodeProps {
  data: NodeOption
}

export function EmailNode({ data }: EmailNodeProps) {
  return (
    <CustomNode data={data}>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            src={imagePath.unselected.email}
            alt="email"
            className="w-4 h-4"
          />
          <span className="text-white">Email</span>
        </div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-gray-700 p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full bg-gray-700 p-2 rounded mt-2"
          />
        </div>
      </div>
    </CustomNode>
  )
}
