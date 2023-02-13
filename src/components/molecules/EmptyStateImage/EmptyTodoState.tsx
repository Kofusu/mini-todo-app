import React, { FC } from 'react'
import Image from 'next/image'

import EmptyListImage from '@/assets/img/todo-empty-state.png'

interface Props {
  onClick?: () => void
}

const EmptyListState: FC<Props> = ({ onClick }) => {
  return (
    <div
      className="pt-12 flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <Image src={EmptyListImage} alt="Empty To Do List" />
    </div>
  )
}

export default EmptyListState
