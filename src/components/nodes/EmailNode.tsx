import imagePath from '@/constants/imagePath'
import CustomNode from '@/components/common/CustomNode/CustomNode'
import { NodeOption } from '@/types'
import { InfoItem } from '@/components/common/infoComponents/InfoItem'
import { useState } from 'react'

interface EmailNodeProps {
  id: string
  data: NodeOption
}

interface EmailNodeData {
  from?: string
  subject?: string
  message?: string
}

export function EmailNode({ data, id }: EmailNodeProps) {
  const [nodeData, setNodeData] = useState<EmailNodeData>({
    from: '',
    subject: '',
    message: '',
  })

  return (
    <CustomNode
      id={id}
      data={data}
      title="Email"
      icon={imagePath.selected.email}
    >
      <div id={'email_node_content'} className="flex flex-col gap-4">
        <InfoItem source={'email_node'} title={'From'} value={nodeData.from} />

        <InfoItem
          source={'email_node'}
          title={'Subject'}
          value={nodeData.subject}
        />

        <InfoItem
          source={'email_node'}
          title={'Message'}
          value={nodeData.message}
        />
      </div>
    </CustomNode>
  )
}
