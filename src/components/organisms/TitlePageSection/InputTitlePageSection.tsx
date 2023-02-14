import React, { FC, memo } from 'react'
import { HiArrowsUpDown } from 'react-icons/hi2'

import { InputTodo } from '@/components/molecules/InputTodo'
import { AddButton, IconButton } from '@/components/molecules/AddButton'
import { ActivityDetailType } from '@/utils/types'
import { Space } from 'antd'

interface Props {
  activity: ActivityDetailType
  onClick?: () => void
  onSort?: (sortType: string) => any
}

const InputTitlePageSection: FC<Props> = ({ activity, onClick, onSort }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-end md:justify-between md:mt-8">
      <InputTodo activity={activity} />
      <Space size="small">
        <IconButton
          onSort={onSort}
          icon={
            <HiArrowsUpDown size={12} className="scale-[1.75] md:scale-[2.5]" />
          }
        />
        <AddButton onClick={onClick} />
      </Space>
    </div>
  )
}

export default memo(InputTitlePageSection)
