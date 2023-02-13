import React, { ChangeEvent, FC, memo } from 'react'

import { InputTodo } from '@/components/molecules/InputTodo'
import { AddButton } from '@/components/molecules/AddButton'
import { ActivityDetailType } from '@/utils/types'

interface Props {
  activity: ActivityDetailType
  onClick?: () => void
}

const InputTitlePageSection: FC<Props> = ({ activity, onClick }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-end md:justify-between md:mt-8">
      <InputTodo activity={activity} />
      <AddButton onClick={onClick} />
    </div>
  )
}

export default memo(InputTitlePageSection)
