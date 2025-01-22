import { Select } from 'antd'
import { useState } from 'react'

interface Output {
  id: string
  value: string
}

export function EmailAction() {
  const [emailOutputs, setEmailOutputs] = useState<Output[]>([])

  const handleOutputsChange = (values: string[]) => {
    const newOutputs = values.map((value, index) => ({
      id: (index + 1).toString(),
      value,
    }))
    setEmailOutputs(newOutputs)
  }

  const options = [
    { value: 'Delivered', label: 'Delivered' },
    { value: 'Not delivered', label: 'Not delivered' },
    { value: 'Replied', label: 'Replied' },
    { value: 'Not replied', label: 'Not replied' },
  ]

  const defaultValues = ['Delivered', 'Not delivered', 'Replied', 'Not replied']

  return (
    <div id={'email_action'}>
      <h3 className="text-lg font-semibold mb-4">Email Settings</h3>
      <div>
        <label className="block text-sm mb-1">Outputs</label>
        <Select
          mode="multiple"
          placeholder="Select outputs"
          defaultValue={defaultValues}
          onChange={handleOutputsChange}
          options={options}
        />
      </div>
    </div>
  )
}
