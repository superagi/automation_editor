import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'

interface EmailNodeProps {
  id: string
  data: NodeOption
}

export function EmailNode({ data, id }: EmailNodeProps) {
  return (
    <CustomNode
      id={id}
      data={data}
      title="Email"
      icon={imagePath.selected.email}
    >
      <div id={'email_node_content'} className="flex flex-col">
        <div id={'from'} className={'flex flex-col'}>
          <span className={'text-xs secondary_color'}>From</span>
          <span className={'text-sm'}>sjhdf@jhfd.com</span>
        </div>
      </div>
    </CustomNode>
  )
}
