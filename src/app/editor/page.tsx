'use client'

import { AutomationProvider } from '@/context/AutomationContext'
import Canvas from '@/components/layout/Canvas'
import AutomationSteps from '@/components/layout/automationSteps/AutomationSteps'
import AutomationStepActions from '@/components/layout/automationStepActions/AutomationStepActions'

export default function FlowEditor() {
  return (
    <AutomationProvider>
      <div id={'automation_editor'} className={'flex h-screen'}>
        <div id={'automation_editor_steps'} className={'pl-3 py-3'}>
          <AutomationSteps />
        </div>

        <Canvas />

        <div id={'automation_editor_step_actions'} className={'pl-3 py-3'}>
          <AutomationStepActions />
        </div>
      </div>
    </AutomationProvider>
  )
}
