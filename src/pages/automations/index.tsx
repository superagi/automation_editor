'use client'
import React from 'react'
import '@/styles/_app.css'
import { Button } from '@/components/AntComponents'
import Filters from '@/components/common/filters/Filters'

const Automations: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }

  return (
    <div id={'automations'}>
      <Filters />
    </div>
  )
}

export default Automations
