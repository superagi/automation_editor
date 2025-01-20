import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface LinkedinInMailNodeProps {
  id: string
  data: NodeOption
}

const outputs = ['Sent', 'Failed']

export function LinkedinInMailNode({ data, id }: LinkedinInMailNodeProps) {
  return (
    <CustomNode
      id={id}
      data={data}
      title="LinkedIn InMail"
      icon={imagePath.common.linkedin}
      outputs={outputs}
    >
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-gray-700 p-2 rounded"
        />
        <textarea
          placeholder="InMail Content"
          className="w-full bg-gray-700 p-2 rounded"
        />
      </div>
    </CustomNode>
  )
}
