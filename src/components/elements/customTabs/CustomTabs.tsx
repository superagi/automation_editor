import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { CustomTabProps, Tab } from './type'

const CustomTab: React.FC<CustomTabProps> = ({
  initialActiveTab = 0,
  tabs,
  modelValue,
  showTransition = true,
  height,
  mountAllTabsInitially = false,
  contentPadding = 'pt-5',
  extraHeaderStyles = '',
  onTabSelected,
  onModelValueUpdate,
}) => {
  const [activeTab, setActiveTab] = useState<number>(initialActiveTab)
  const [transitionName, setTransitionName] = useState<string>('slide')

  useEffect(() => {
    setActiveTab(modelValue)
  }, [modelValue])

  const selectTab = (tab: Tab, index: number) => {
    setTransitionName(index > activeTab ? 'slide-right' : 'slide-left')
    setActiveTab(index)
    onModelValueUpdate(index)
    onTabSelected(tab.title)
  }

  // If mountAllTabsInitially is true, mount all tabs when the component is mounted
  useEffect(() => {
    if (mountAllTabsInitially) {
      for (let i = 0; i < tabs.length; i++) {
        // Ensure all tabs are mounted
        setActiveTab(i)
      }
      // Reset to the initial active tab
      setActiveTab(initialActiveTab)
    }
  }, [mountAllTabsInitially, tabs, initialActiveTab])

  return (
    <div className={styles.custom_tab}>
      <div className={`${styles.tab_headers} ${extraHeaderStyles}`}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab_header} ${index === activeTab ? styles.active : ''}`}
            onClick={() => selectTab(tab, index)}
          >
            {tab.selected && (
              <img
                className="size-4"
                src={index === activeTab ? tab.selected : tab.unselected}
                alt=""
              />
            )}
            {tab.title}
            {tab.count !== undefined && (
              <span className={styles.tab_count}>{tab.count}</span>
            )}
          </div>
        ))}
        <div className={styles.additional_slot}>
          <div className={`slot-${activeTab}`} />
          <div className="slot-global" />
        </div>
      </div>
      {showTransition && (
        <div
          className={`overflow-y-scroll ${contentPadding}`}
          style={{ height }}
        >
          <div className={transitionName}>
            <div className="tab-pane">
              <div className={`tab_content-${activeTab}`} />
            </div>
          </div>
        </div>
      )}
      {mountAllTabsInitially && (
        <div>
          {tabs.map((_, index) => (
            <div key={`all-${index}`} style={{ display: 'none' }}>
              <div className={`tab_content-${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomTab
