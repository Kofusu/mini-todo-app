import React, { FC } from 'react'
import Image from 'next/image'

import EmptyActivityImage from '@/assets/img/activity-empty-state.png'

interface Props {
  onClick?: () => void
}

const EmptyActivityState: FC<Props> = ({ onClick }) => {
  return (
    <div className="pt-12" onClick={onClick}>
      <Image src={EmptyActivityImage} alt="Empty To Do List" />
    </div>
  )
}
export default EmptyActivityState
