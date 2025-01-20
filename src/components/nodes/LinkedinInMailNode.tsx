import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import { NodeOption } from '@/types'
import CustomNode from '@/components/nodes/CustomNode'

interface LinkedinInMailNodeProps {
  data: NodeOption
}

export function LinkedinInMailNode({ data }: LinkedinInMailNodeProps) {
  return (
    <CustomNode data={data}>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            src={imagePath.common.linkedin}
            alt="linkedin"
            className="w-4 h-4"
          />
          <span className="text-white">LinkedIn InMail</span>
        </div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-gray-700 p-2 rounded"
          />
          <textarea
            placeholder="InMail Content"
            className="w-full bg-gray-700 p-2 rounded mt-2"
          />
        </div>
      </div>
    </CustomNode>
  )
}
