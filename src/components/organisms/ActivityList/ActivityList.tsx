import { CardActivity } from '@/components/molecules/CardActivity'
import React, { FC, memo } from 'react'

interface Props {
  activities: {
    id: number
    title: string
    created_at: string
  }[]
  refetch?: any
}

const ActivityList: FC<Props> = ({ activities, refetch }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
      {activities?.map((activity) => (
        <CardActivity key={activity.id} activity={activity} refetch={refetch} />
      ))}
    </div>
  )
}

export default memo(ActivityList)
