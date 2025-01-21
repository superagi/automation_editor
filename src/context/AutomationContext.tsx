import { createContext, useContext, useState } from 'react'
import { NodeOption } from '@/types'

interface AutomationContextType {
  selectedNode: NodeOption | null
  setSelectedNode: (node: NodeOption | null) => void
}

const AutomationContext = createContext<AutomationContextType | undefined>(
  undefined
)

export function AutomationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedNode, setSelectedNode] = useState<NodeOption | null>(null)

  return (
    <AutomationContext.Provider value={{ selectedNode, setSelectedNode }}>
      {children}
    </AutomationContext.Provider>
  )
}

export function useAutomation() {
  const context = useContext(AutomationContext)
  if (undefined === context) {
    throw new Error('useAutomation must be used within AutomationProvider')
  }
  return context
}
