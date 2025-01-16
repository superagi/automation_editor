import { Handle, Position } from 'reactflow';

export default function InputNode({ data }: { data: { label: string } }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-500">
          IN
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.label}</div>
          <div className="text-gray-500">Input Node</div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}