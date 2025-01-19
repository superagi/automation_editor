import { useCallback, useRef } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  ReactFlowInstance,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { NodeData } from '@/types'
import CustomNode from '../nodes/CustomNode'

const nodeTypes = {
  custom: CustomNode,
}

export default function Canvas() {
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onInit = useCallback((instance: ReactFlowInstance) => {
    reactFlowInstance.current = instance
  }, [])

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const data = event.dataTransfer.getData('application/reactflow')
      if (!data || !reactFlowInstance.current) return

      const reactflowBounds = event.currentTarget.getBoundingClientRect()
      const position = reactFlowInstance.current.project({
        x: event.clientX - reactflowBounds.left,
        y: event.clientY - reactflowBounds.top,
      })

      const nodeData: NodeData = JSON.parse(data)
      const newNode: Node = {
        id: String(Date.now()),
        type: 'custom',
        position,
        data: nodeData,
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [setNodes]
  )

  return (
    <div className="flex-1" style={{ height: 'calc(100vh - 60px)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onInit={onInit}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
