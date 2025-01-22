import React from 'react'
import { InfoGridProps } from './type'

const InfoGrid: React.FC<InfoGridProps> = ({
  gap = 2,
  columns = 2,
  children,
}) => {
  const gridClass = `grid gap-${gap} grid-cols-${columns}`

  return <div className={gridClass}>{children}</div>
}

export default InfoGrid
