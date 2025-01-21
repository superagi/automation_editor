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
  NodeMouseHandler,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { nodeTypes } from '@/types/nodeTypes'
import { useAutomation } from '@/context/AutomationContext'
import { NodeOption } from '@/types'

export default function Canvas() {
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: 'trigger_node_1',
      type: 'trigger',
      position: { x: 100, y: 100 },
      data: {
        id: 'trigger',
        title: 'Start Here',
      },
    },
  ])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const { setSelectedNode } = useAutomation()

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
      const position = reactFlowInstance.current.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const { type, data: nodeData } = JSON.parse(data)
      const newNode: Node = {
        id: String(Date.now()),
        type,
        position,
        data: nodeData,
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [setNodes]
  )

  const onNodeClick: NodeMouseHandler = useCallback(
    (event: React.MouseEvent, node: Node) => {
      setSelectedNode(node.data as NodeOption)
    },
    [setSelectedNode]
  )

  const onPaneClick = useCallback(() => {
    setSelectedNode(null)
  }, [setSelectedNode])

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
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: true,
        }}
        deleteKeyCode={['Backspace', 'Delete']}
        multiSelectionKeyCode={['Control', 'Meta']}
        selectionKeyCode={['Shift']}
      >
        <Background color="#ccc" gap={16} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
