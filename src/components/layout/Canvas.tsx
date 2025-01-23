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
  useReactFlow,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { nodeTypes } from '@/types/nodeTypes'
import { useAutomation } from '@/context/AutomationContext'
import { NodeOption } from '@/types'
import styles from './Canvas.module.css'
import imagePath from '@/constants/imagePath'
import Dagre from '@dagrejs/dagre'

const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: 'TB' | 'LR' = 'TB'
) => {
  const dagreGraph = new Dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach((node) =>
    dagreGraph.setNode(node.id, {
      width: node.width || 172,
      height: node.height || 36,
    })
  )
  edges.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target))

  Dagre.layout(dagreGraph)

  const layoutedNodes = nodes.map((node) => {
    const position = dagreGraph.node(node.id)
    return {
      ...node,
      position: {
        x: position.x - (node.width || 172) / 2,
        y: position.y - (node.height || 36) / 2,
      },
      draggable: true,
    }
  })

  return { nodes: layoutedNodes, edges }
}

export default function Canvas() {
  const { fitView, zoomOut } = useReactFlow()
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: 'trigger_node_1',
      type: 'trigger',
      position: { x: 100, y: 100 },
      data: {
        id: 'trigger',
        label: 'Trigger',
        icon: imagePath.common.triggerNodeTitleIcon,
        size: 16,
      },
    },
  ])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const { setSelectedNode } = useAutomation()

  const onInit = useCallback(
    (instance: ReactFlowInstance) => {
      reactFlowInstance.current = instance

      // Automatically set the trigger node as the selected node on initialization
      const triggerNode = nodes.find((node) => node.id === 'trigger_node_1')
      if (triggerNode) {
        setSelectedNode(triggerNode.data as NodeOption)
      }
    },
    [nodes, setSelectedNode]
  )

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

      setEdges((prevEdges) =>
        prevEdges.map((edge) => ({
          ...edge,
          animated: newAnimatedState,
        }))
      )

      return newAnimatedState
    })
  }
  const onLayout = useCallback(
    (direction: 'TB' | 'LR') => {
      const layouted = getLayoutedElements(nodes, edges, direction)
      setNodes([...layouted.nodes])
      setEdges([...layouted.edges])
      window.requestAnimationFrame(() => {
        fitView({ padding: 0.8 })
      })
    },
    [nodes, edges, setNodes, setEdges]
  )
  return (
    <div
      className="flex-1"
      style={{ height: 'calc(100vh - 60px)', position: 'relative' }}
    >
      <div className={styles.editor_buttons_div}>
        <button onClick={toggleAnimation} className="primary_small">
          {isAnimated ? 'Disable Animation' : 'Enable Animation'}
        </button>
        <button onClick={() => onLayout('TB')} className="primary_small">
          Vertical Layout
        </button>
        <button onClick={() => onLayout('LR')} className="primary_small">
          Horizontal Layout
        </button>
      </div>
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
