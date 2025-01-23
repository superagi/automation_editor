import React from 'react'

import { AutomationProvider } from '@/context/AutomationContext'
import Canvas from '@/components/layout/Canvas'
import AutomationSteps from '@/components/layout/automationSteps/AutomationSteps'
import AutomationStepActions from '@/components/layout/automationStepActions/AutomationStepActions'

const FlowEditor: React.FC = () => {
  return (
    <AutomationProvider>
      <div id={'automation_editor'} className={'flex w-full h-full'}>
        <div id={'automation_editor_steps'} className={'pl-3 py-3'}>
          <AutomationSteps />
        </div>

        <Canvas />

        <div id={'automation_editor_step_actions'} className={'pr-3 py-3'}>
          <AutomationStepActions />
        </div>
      </div>
    </AutomationProvider>
  )
}

export default FlowEditor
