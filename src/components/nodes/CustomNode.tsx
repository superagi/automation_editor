import { Handle, Position } from 'reactflow'
import { NodeOption } from '@/types'

interface CustomNodeProps {
  data: NodeOption
  children: React.ReactNode
}

export default function CustomNode({ data, children }: CustomNodeProps) {
  return (
    <div id={`${data.id}_custom_node`} className="flex flex-col">
      <Handle type="target" position={Position.Top} />
      {children}
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}
