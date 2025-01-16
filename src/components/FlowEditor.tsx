import Canvas from './Canvas';
import Sidebar from './Sidebar';

export default function FlowEditor() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Canvas />
    </div>
  );
}