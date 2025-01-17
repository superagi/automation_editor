'use client'
import Canvas from '@/components/elements/Canvas'
import Sidebar from '@/components/elements/Sidebar'

export default function FlowEditor() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Canvas />
    </div>
  )
}
