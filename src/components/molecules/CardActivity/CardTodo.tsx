import { updateCheckedTodo } from '@/api/todo'
import { CustomCheckbox } from '@/components/atoms/Input'
import { Title } from '@/components/atoms/Title'
import { TodoItemsType } from '@/utils/types'
import { Card, Checkbox, Col } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { FC, useCallback, useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'

interface Props {
  todoItem: TodoItemsType
}

const CardTodo: FC<Props> = ({ todoItem }) => {
  const [checkBoxStatus, setCheckboxStatus] = useState<boolean>(
    todoItem.is_active === 0
  )
  const [isTouched, setIsTouched] = useState<boolean>(false)

  const changeHandler = useCallback(
    (e: CheckboxChangeEvent) => {
      updateCheckedTodo(todoItem.id, !e.target.checked)
      setCheckboxStatus(e.target.checked)
      setIsTouched(true)
    },
    [setCheckboxStatus, setIsTouched, todoItem.id]
  )

  const getColorPriority = useCallback(() => {
    switch (todoItem.priority) {
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
  }, [todoItem.priority])

  return (
    <Col span={24} className="my-2">
      <Card className="shadow-customShadow">
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center">
            <CustomCheckbox
              onChange={changeHandler}
              isActive={isTouched ? checkBoxStatus : todoItem.is_active === 0}
              className="mr-2 md:mr-8 md:scale-150"
            />
            <div
              className={`rounded-full h-2 w-2 mr-2 md:mr-4 scale-125 md:scale-[2] ${getColorPriority()}`}
            />
            <Title
              level={3}
              title={todoItem.title}
              className={`text-base md:text-lg mr-2 md:mr-4 overflow-x-hidden whitespace-nowrap max-w-[150px] md:max-w-[250px] ${
                checkBoxStatus && 'line-through opacity-50'
              }`}
            />
            <HiOutlinePencil className="mr-2 text-slate-500 scale-125 md:scale-150 cursor-pointer" />
          </div>
          <HiOutlineTrash className="text-slate-400 scale-125 md:scale-150 hover:text-red-500 cursor-pointer" />
        </div>
      </Card>
    </Col>
  )
}

export default CardTodo
