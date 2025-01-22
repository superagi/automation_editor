import styles from './output.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import imagePath from '@/constants/imagePath'

interface Output {
  id: string
  value: string
}

interface OutputsProps {
  source: string
  onChange?: (outputs: Output[]) => void
  initialOutputs?: Output[]
}

export function Outputs({ source, onChange, initialOutputs }: OutputsProps) {
  const [outputs, setOutputs] = useState<Output[]>(
    initialOutputs || [{ id: '1', value: '' }]
  )

  useEffect(() => {
    onChange?.(outputs)
  }, [outputs, onChange])

  const addOutput = () => {
    const newOutput = {
      id: String(Date.now()),
      value: '',
    }
    setOutputs([...outputs, newOutput])
  }

  const removeOutput = (indexToRemove: number) => {
    if (outputs.length === 1) return
    setOutputs(outputs.filter((_, index) => index !== indexToRemove))
  }

  const handleOutputChange = (index: number, value: string) => {
    const newOutputs = outputs.map((output, i) => {
      if (i === index) {
        return { ...output, value }
      }
      return output
    })
    setOutputs(newOutputs)
  }

  return (
    <div id={`${source}_outputs`} className={'flex flex-col gap-6 w-full'}>
      <div className={'flex flex-col gap-2'}>
        {outputs.map((output, index) => (
          <div key={output.id} className={`${styles.output_container} gap-4`}>
            <div className={`flex flex-row justify-between items-center`}>
              <span className={'text-sm'}>Output {index + 1}</span>

              {outputs.length > 1 && (
                <button
                  onClick={() => removeOutput(index)}
                  className={'border_8 rounded-lg pt-1'}
                >
                  <Image
                    className={'size-[14px]'}
                    src={imagePath.common.crossIcon}
                    alt={'cross_icon'}
                  />
                </button>
              )}
            </div>

            <div className={`flex flex-col gap-1`}>
              <span className={'text-xs secondary_color'}>Name</span>

              <input
                type={'text'}
                value={output.value}
                onChange={(e) => handleOutputChange(index, e.target.value)}
                className={'input_medium'}
                placeholder={'Enter output value'}
              />
            </div>
          </div>
        ))}
      </div>

      <button onClick={addOutput} className={'secondary_medium w-fit'}>
        + Add Output
      </button>
    </div>
  )
}
