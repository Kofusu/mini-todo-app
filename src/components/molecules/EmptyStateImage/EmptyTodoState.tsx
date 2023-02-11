import React, { FC } from 'react'
import Image from 'next/image'

import EmptyListImage from '@/assets/img/todo-empty-state.png'

const EmptyListState: FC = () => {
  return (
    <div className="pt-12">
      <Image src={EmptyListImage} alt="Empty To Do List" />
    </div>
  )
}

export default EmptyListState
