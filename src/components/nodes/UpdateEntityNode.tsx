import Image from 'next/image'
import imagePath from '@/constants/imagePath'
import { NodeOption } from '@/types'
import CustomNode from '@/components/nodes/CustomNode'

interface UpdateEntityNodeProps {
  data: NodeOption
}

export function UpdateEntityNode({ data }: UpdateEntityNodeProps) {
  return (
    <CustomNode data={data}>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            src={imagePath.unselected.updateEntity}
            alt="update"
            className="w-4 h-4"
          />
          <span className="text-white">Update Entity</span>
        </div>
        <div className="mt-3">
          <select className="w-full bg-gray-700 p-2 rounded">
            <option>Select Entity</option>
            <option>Contact</option>
            <option>Company</option>
          </select>
          <input
            type="text"
            placeholder="Field"
            className="w-full bg-gray-700 p-2 rounded mt-2"
          />
          <input
            type="text"
            placeholder="Value"
            className="w-full bg-gray-700 p-2 rounded mt-2"
          />
        </div>
      </div>
    </CustomNode>
  )
}
