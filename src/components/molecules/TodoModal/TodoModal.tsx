import { Modal } from 'antd'
import React, { ChangeEvent, FC, memo, useState } from 'react'
import { TodoModalInput } from './'

interface Props {
  onSubmit: (name: string, prio: string) => void
  onClose?: () => void
  isOpen?: boolean
  name?: string
  prior?: string
  autoClear?: boolean
}

const TodoModal: FC<Props> = ({
  isOpen,
  onSubmit,
  onClose,
  name,
  prior,
  autoClear,
}) => {
  const [inputName, setInputName] = useState<string>(name || '')
  const [inputPriority, setInputPriority] = useState<string>(
    prior || 'very-high'
  )

  const inputNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target?.value)
  }

  const inputPriorityhangeHandler = (e: string) => {
    setInputPriority(e)
  }

  const submitHandler = () => {
    onSubmit(inputName, inputPriority)
    if (autoClear) {
      setInputName('')
      setInputPriority('very-high')
      return
    }
    setInputName(inputName || '')
    setInputPriority(inputPriority || 'very-high')
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

export default TodoModal
