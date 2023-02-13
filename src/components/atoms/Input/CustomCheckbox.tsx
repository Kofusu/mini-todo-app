import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { FC } from 'react'

interface Props {
  isActive: boolean
  onChange?: (e: CheckboxChangeEvent) => void
  className?: string
}

const CustomCheckbox: FC<Props> = ({ isActive, onChange, className }) => {
  return (
    <Checkbox onChange={onChange} checked={isActive} className={className} />
  )
}

export default CustomCheckbox
