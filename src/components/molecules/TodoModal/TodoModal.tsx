import { Modal } from 'antd'
import React, { ChangeEvent, FC, memo, useState } from 'react'
import { TodoModalInput } from './'

interface Props {
  onSubmit: (name: string, prio: string) => void
  onClose?: () => void
  isOpen?: boolean
}

const TodoModal: FC<Props> = ({ isOpen, onSubmit, onClose }) => {
  const [inputName, setInputName] = useState<string>('')
  const [inputPriority, setInputPriority] = useState<string>('very-high')

  const inputNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target?.value)
  }

  const inputPriorityhangeHandler = (e: string) => {
    setInputPriority(e)
  }

  const submitHandler = () => {
    onSubmit(inputName, inputPriority)
    setInputName('')
    setInputPriority('very-high')
  }

  return (
    <Modal
      title="Tambah List Item"
      okButtonProps={{
        className:
          'bg-customBlue hover:bg-blue-500 h-12 w-32 text-lg rounded-3xl',
      }}
      centered
      width={800}
      onOk={submitHandler}
      okText="Simpan"
      onCancel={onClose}
      open={isOpen}
      cancelButtonProps={{ className: 'hidden' }}
    >
      <TodoModalInput
        namaList={inputName}
        priority={inputPriority}
        nameOnChange={inputNameChangeHandler}
        prioOnChange={inputPriorityhangeHandler}
      />
    </Modal>
  )
}

export default memo(TodoModal)
