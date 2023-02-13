import React, { FC } from 'react'

import { TodoItemsType } from '@/utils/types'
import { CardTodo } from '@/components/molecules/CardActivity'
import { Row } from 'antd'

interface Props {
  todoItems: TodoItemsType[]
}

const TodoList: FC<Props> = ({ todoItems }) => {
  return (
    <Row className="mt-4 md:mt-10">
      {todoItems?.map((todoItem) => (
        <CardTodo key={todoItem.id} todoItem={todoItem} />
      ))}
    </Row>
  )
}

export default TodoList
