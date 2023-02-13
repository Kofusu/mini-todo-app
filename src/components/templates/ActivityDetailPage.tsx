import { updateActivity } from '@/api/activity'
import { addTodo } from '@/api/todo'
import { ActivityDetailType } from '@/utils/types'
import React, { FC, memo, useCallback, useState } from 'react'
import { BaseContainer } from '../atoms/Container'
import { EmptyListState } from '../molecules/EmptyStateImage'
import { TodoModal } from '../molecules/TodoModal'
import { InputTitlePageSection } from '../organisms/TitlePageSection'
import { TodoList } from '../organisms/TodoList'

interface Props {
  activity: ActivityDetailType
  refetch: () => void
}

const ActivityDetailPage: FC<Props> = ({ activity, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [setIsModalOpen])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [setIsModalOpen])

  const submitHandler = useCallback(
    (name: string, prio: string) => {
      addTodo(activity?.id, name, prio).then(() => {
        refetch()
      })
      setIsModalOpen(false)
    },
    [setIsModalOpen, activity?.id, refetch]
  )

  if (activity?.todo_items.length <= 0) {
    return (
      <BaseContainer>
        <InputTitlePageSection activity={activity} onClick={openModal} />
        <EmptyListState onClick={openModal} />
        <TodoModal
          onSubmit={submitHandler}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </BaseContainer>
    )
  }

  return (
    <BaseContainer>
      <InputTitlePageSection activity={activity} onClick={openModal} />
      <TodoList refetch={refetch} todoItems={activity?.todo_items} />
      <TodoModal
        onSubmit={submitHandler}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </BaseContainer>
  )
}

export default memo(ActivityDetailPage)
