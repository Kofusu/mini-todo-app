import React, { FC } from 'react'
import Image from 'next/image'

import EmptyActivityImage from '@/assets/img/activity-empty-state.png'

const EmptyActivityState: FC = () => {
  return (
    <div className="pt-12">
      <Image src={EmptyActivityImage} alt="Empty To Do List" />
    </div>
  )
}
export default EmptyActivityState
