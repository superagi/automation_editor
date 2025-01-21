import { Handle, Position, useStore } from 'reactflow'
import { NodeOption } from '@/types'
import Image from 'next/image'
import styles from './node.module.css'
import { Node } from 'reactflow'

interface CustomNodeProps {
  data: NodeOption
  children: React.ReactNode
  title: string
  icon: any
  outputs: string[]
  id: string
}

export default function CustomNode({
  data,
  children,
  title,
  icon,
  outputs,
  id,
}: CustomNodeProps) {
  const selectedNodes = useStore((state) =>
    Array.from(state.nodeInternals.values()).filter((node) => node.selected)
  )
  const isSelected = selectedNodes.some((node: Node) => node.id === id)

  return (
    <div
      id={`${data.id}_custom_node`}
      className={`${styles.node_container} ${
        isSelected ? styles.selected : ''
      } flex flex-col rounded-lg w-60 text-white`}
    >
      <div
        id={`${data.id}_custom_node_header`}
        className={'flex flex-row items-center p-2 relative'}
      >
        <Handle
          type={'target'}
          position={Position.Left}
          style={{
            left: -6,
            width: '8px',
            height: '8px',
          }}
        />

        <div className={'flex flex-row items-center gap-2 px-[2px]'}>
          <Image className={'size-4'} src={icon} alt={`${data.id}_icon`} />
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>

      {children && (
        <div
          id={`${data.id}_custom_node_body`}
          className={'flex flex-col py-3 px-2 border_top border_bottom'}
        >
          {children}
        </div>
      )}

      <div id={`${data.id}_custom_node_footer`} className={'flex flex-col'}>
        {outputs.map((output, index) => (
          <div
            key={index}
            className={
              'flex flex-row items-center justify-end relative group py-3 px-4'
            }
          >
            <span className={'text-[13px] opacity-80'}>{output}</span>

            <Handle
              type="source"
              position={Position.Right}
              id={output}
              style={{
                right: -6,
                background: 'var(--foreground-rgb)',
                width: '8px',
                height: '8px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
