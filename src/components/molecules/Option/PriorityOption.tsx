import { Select } from 'antd'
import React, { FC, useCallback } from 'react'

interface Props {
  title: string
  value: string
}

const PriorityOption: FC<Props> = ({ title, value }) => {
  const getColorPriority = useCallback((prio: string) => {
    switch (prio) {
      case 'very-low':
        return 'bg-purple-500'
      case 'low':
        return 'bg-blue-500'
      case 'normal':
        return 'bg-green-500'
      case 'high':
        return 'bg-yellow-500'
      case 'very-high':
        return 'bg-red-500'
      default:
        break
    }
  }, [])

  return (
    <div className="flex items-center">
      <div
        className={`rounded-full h-2 w-2 ml-2 md:ml-4 mr-2 md:mr-4 scale-125 md:scale-[2] ${getColorPriority(
          value
        )}`}
      />
      <span>{title}</span>
    </div>
  )
}

export default PriorityOption
