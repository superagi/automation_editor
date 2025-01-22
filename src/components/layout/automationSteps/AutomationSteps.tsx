import styles from './steps.module.css'
import imagePath from '@/constants/imagePath'
import Image from 'next/image'
import { nodes } from '@/constants/nodeConstants'

export default function AutomationSteps() {
  const onDragStart = (event: React.DragEvent, option: any) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify({ type: option.id, data: option })
    )
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside
      className={`${styles.steps_container} w-56 h-full text-white proxima_nova rounded-lg overflow-y-scroll`}
    >
      <div
        className={'flex flex-row items-center gap-3 py-3 px-4 border_bottom'}
      >
        <span>Steps</span>
      </div>

      <div className={'flex flex-col'}>
        {nodes?.map((category, categoryIndex) => (
          <div key={categoryIndex} className={'flex flex-col gap-2 py-3 px-2'}>
            <div className={'text-[13px] secondary_color'}>
              {category.label}
            </div>

            <div className={'flex flex-col gap-1'}>
              {category.options?.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`${styles.step_option} flex flex-row items-center justify-between cursor-move`}
                  onDragStart={(event) => onDragStart(event, option)}
                  draggable
                >
                  <div className={'flex flex-row items-center gap-2'}>
                    <Image
                      className={'size-4'}
                      src={option.icon}
                      alt={`${option.id}_icon`}
                    />
                    <span className={'text-sm font-semibold'}>
                      {option.label}
                    </span>
                  </div>

                  <Image
                    className={'size-3'}
                    src={imagePath.common.dragIcon}
                    alt={'drag_icon'}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
