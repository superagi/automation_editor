import { Button, Select } from 'antd'
import Image from 'next/image'
import styles from './filters.module.css'
import imagePath from '@/constants/imagePath'
import React, { useState } from 'react'

// @ts-ignore
const Filters: React.FC = ({ source }: { source: string }) => {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<any[]>([])
  const options = [
    { value: 'Lead source', label: 'Lead source' },
    { value: 'Contact source', label: 'Contact source' },
  ]

  const handleSelectChange = (
    value: string,
    groupIndex: number,
    filterIndex: number
  ) => {
    const newFilters = [...filters]
    newFilters[groupIndex].filters[filterIndex].value = value
    setFilters(newFilters)
    console.log(newFilters)
  }

  const addFilterGroup = () => {
    setFilters([...filters, { filters: [{ value: '' }], type: 'AND' }])
  }

  const addFilter = (groupIndex: number, type: 'OR') => {
    const newFilters = [...filters]
    newFilters[groupIndex].filters.push({ value: '' })
    setFilters(newFilters)
  }

  const removeFilter = (groupIndex: number, filterIndex: number) => {
    const newFilters = [...filters]
    newFilters[groupIndex].filters.splice(filterIndex, 1)

    if (newFilters[groupIndex].filters.length === 0) {
      newFilters.splice(groupIndex, 1)
    }

    if (newFilters.length === 0) {
      setShowFilters(false)
    }

    setFilters(newFilters)
  }

  return (
    <div id={`${source}_filters`}>
      {!showFilters ? (
        <Button
          className={'secondary_medium'}
          onClick={() => {
            setShowFilters(true)
            setFilters([{ filters: [{ value: '' }], type: 'AND' }])
          }}
        >
          <Image
            className={'size-4'}
            src={imagePath.common.filterIcon}
            alt={'filter_icon'}
          />
          Add Filters
        </Button>
      ) : (
        <div className={'flex flex-col gap-2'}>
          {filters.map((group, groupIndex) => (
            <div key={groupIndex}>
              <div
                className={`${styles.filter_container} flex flex-col gap-2 px-3 py-4`}
              >
                <div className={'flex flex-col gap-2'}>
                  {group.filters.map((filter: any, filterIndex: number) => (
                    <div key={filterIndex}>
                      {filterIndex > 0 && (
                        <div
                          className={`${styles.text_container} flex flex-row w-fit justify-self-center p-[6px] my-4`}
                        >
                          OR
                        </div>
                      )}
                      <div
                        className={
                          'flex flex-row items-center justify-between gap-4'
                        }
                      >
                        <div className={'flex flex-row gap-1 items-center'}>
                          <Select
                            options={options}
                            value={filter.value || undefined}
                            onChange={(value) =>
                              handleSelectChange(value, groupIndex, filterIndex)
                            }
                            style={{ width: 160 }}
                            placeholder={'Select an option'}
                          />
                        </div>
                        <div
                          className={
                            'flex items-center justify-center p-1 rounded-lg border_8 cursor-pointer'
                          }
                          onClick={() => removeFilter(groupIndex, filterIndex)}
                        >
                          <Image
                            className={'size-4'}
                            src={imagePath.common.crossIcon}
                            alt={'cross_icon'}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className={'secondary_small w-fit'}
                  onClick={() => addFilter(groupIndex, 'OR')}
                >
                  <Image
                    className={'size-4'}
                    src={imagePath.common.addIcon}
                    alt={'add_icon'}
                  />
                  OR
                </Button>
              </div>
              {groupIndex < filters.length - 1 && (
                <div
                  className={`${styles.text_container} flex flex-row w-fit justify-self-center p-[6px] my-4`}
                >
                  AND
                </div>
              )}
            </div>
          ))}

          <Button className={'secondary_small w-fit'} onClick={addFilterGroup}>
            <Image
              className={'size-4'}
              src={imagePath.common.addIcon}
              alt={'add_icon'}
            />
            AND
          </Button>
        </div>
      )}
    </div>
  )
}

export default Filters
