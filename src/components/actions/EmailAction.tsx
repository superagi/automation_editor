import { Outputs } from '@/components/common/Outputs/Outputs'
import { useState } from 'react'

interface Output {
  id: string
  value: string
}

export function EmailAction() {
  const [emailOutputs, setEmailOutputs] = useState<Output[]>([])

  const handleOutputsChange = (outputs: Output[]) => {
    setEmailOutputs(outputs)
  }

  return (
    <div id={'email_action'} className="p-4">
      <h3 className="text-lg font-semibold mb-4">Email Settings</h3>
      <div>
        <label className="block text-sm mb-1">Outputs</label>
        <Outputs
          source="email"
          onChange={handleOutputsChange}
          initialOutputs={[
            { id: '1', value: 'Delivered' },
            { id: '2', value: 'Not delivered' },
            { id: '3', value: 'Replied' },
            { id: '4', value: 'Not replied' },
          ]}
        />
      </div>
    </div>
  )
}
