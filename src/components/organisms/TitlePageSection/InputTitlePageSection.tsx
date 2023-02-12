import React, { ChangeEvent, FC, memo } from 'react'

import { InputTodo } from '@/components/molecules/InputTodo'
import { AddButton } from '@/components/molecules/AddButton'

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  onFinishTitle: (value: string) => void
}

const InputTitlePageSection: FC<Props> = ({
  value,
  onChange,
  onFinishTitle,
}) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-end md:justify-between md:mt-8">
      <InputTodo
        onFinishTitle={onFinishTitle}
        value={value}
        onChange={onChange}
      />
      <AddButton />
    </div>
  )
}

export default memo(InputTitlePageSection)
