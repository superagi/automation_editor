import { NodeData } from '@/types';

const nodeTypes: NodeData[] = [
  { label: 'Input Node', type: 'input' },
  { label: 'Process Node', type: 'process' },
  { label: 'Output Node', type: 'output' },
];

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: NodeData) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <div className="text-xl font-bold mb-4">Node Types</div>
      <div className="flex flex-col gap-4">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className="bg-white p-4 rounded-md shadow cursor-move"
            onDragStart={(event) => onDragStart(event, node)}
            draggable
          >
            {node.label}
          </div>
        ))}
      </div>
    </aside>
  );
}