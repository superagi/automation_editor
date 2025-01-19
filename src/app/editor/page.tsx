'use client'
import Canvas from '@/components/elements/Canvas'
import Steps from '@/components/elements/steps/Steps'

export default function FlowEditor() {
  return (
    <div className="flex h-screen">
      <Steps />
      <Canvas />
    </div>
  )
}
