import { Select } from 'antd'
import { Filters } from '@/components/common/filters/Filters'

export function TriggerAction() {
  const options = [
    { id: 1, label: 'Lead change', title: 'testing' },
    { id: 2, label: 'Contact change', title: 'testing' },
  ]

  const handleOutputsChange = (value: any) => {
    console.log('Selected:', value)
  }

  return (
    <div id={'trigger_action'} className={'flex flex-col gap-6'}>
      <div id={'trigger_event'} className={'flex flex-col gap-2'}>
        <span className={'text-[13px] secondary_color'}>Trigger event</span>
        <Select
          placeholder={'Select an event'}
          onChange={handleOutputsChange}
          options={options.map((option) => ({
            ...option,
            label: `${option.label} (${option.title})`,
            value: option.id,
          }))}
        />
      </div>

      <div id={'trigger_filters'} className={'flex flex-col gap-2'}>
        <span className={'text-[13px] secondary_color'}>Filters</span>
        <Filters source="trigger" />
      </div>
    </div>
  )
}
