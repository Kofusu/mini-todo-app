import { updateActivity } from '@/api/activity'
import { ActivityDetailType } from '@/utils/types'
import React, { FC, memo, useCallback } from 'react'
import { BaseContainer } from '../atoms/Container'
import { EmptyListState } from '../molecules/EmptyStateImage'
import { InputTitlePageSection } from '../organisms/TitlePageSection'
import { TodoList } from '../organisms/TodoList'

interface Props {
  activity: ActivityDetailType
}

const ActivityDetailPage: FC<Props> = ({ activity }) => {
  const clickHandler = useCallback(() => {}, [])

  if (activity.todo_items.length <= 0) {
    return (
      <BaseContainer>
        <InputTitlePageSection activity={activity} onClick={clickHandler} />
        <EmptyListState />
      </BaseContainer>
    )
  }

  return (
    <BaseContainer>
      <InputTitlePageSection activity={activity} onClick={clickHandler} />
      <TodoList todoItems={activity.todo_items} />
    </BaseContainer>
  )
}

export default memo(ActivityDetailPage)
