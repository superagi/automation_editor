import { NodeData } from '@/types'

const nodeData: NodeData[] = [
  {
    type: 'trigger',
    label: 'Trigger Node',
    description: 'This is trigger node',
    outputArray: [{ label: 'true' }],
  },
  {
    type: 'action',
    label: 'Action Node',
    description: 'This is an action node',
    outputArray: [
      { label: 'true' },
      { label: 'false' },
      { label: 'true' },
      { label: 'false' },
      { label: 'true' },
      { label: 'false' },
      { label: 'true' },
      { label: 'false' },
      { label: 'true' },
      { label: 'false' },
      { label: 'true' },
      { label: 'false' },
    ],
  },
  {
    type: 'end',
    label: 'End Node',
    description: 'This is an end node',
    outputArray: [],
  },
]

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeData: NodeData) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(nodeData)
    )
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <div className="text-xl font-bold mb-4">Node Types</div>
      <div className="flex flex-col gap-4">
        {nodeData?.map((arr, id) => (
          <div
            key={id}
            className="bg-white p-4 rounded-md shadow cursor-move"
            onDragStart={(event) => onDragStart(event, arr)}
            draggable
          >
            {arr?.type}
          </div>
        ))}
      </div>
    </aside>
  )
}
