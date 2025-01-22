'use client'
import { useCallback, useRef, useState } from 'react'
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
import styles from './Canvas.module.css'

export default function Canvas() {
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
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

  const toggleAnimation = () => {
    setIsAnimated((prev) => {
      const newAnimatedState = !prev

      // Update the edges with the new animated state
      setEdges((prevEdges) =>
        prevEdges.map((edge) => ({
          ...edge,
          animated: newAnimatedState,
        }))
      )

      return newAnimatedState
    })
  }

  return (
    <div
      className="flex-1"
      style={{ height: 'calc(100vh - 60px)', position: 'relative' }}
    >
      <button
        onClick={toggleAnimation}
        className={`primary_small ${styles.animation_toggle_button}`}
      >
        {isAnimated ? 'Disable Animation' : 'Enable Animation'}
      </button>
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
          type: 'bezier',
          animated: isAnimated,
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
