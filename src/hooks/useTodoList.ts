import { getOneActivity } from '@/api/activity'
import { useQuery } from 'react-query'

import { ActivityDetailType } from '@/utils/types'

const useTodo = (activityDetail: ActivityDetailType) => {
  const query = useQuery(
    `todo-${activityDetail.id}`,
    () => getOneActivity(activityDetail.id),
    {
      initialData: activityDetail,
    }
  )

  return { ...query }
}

export default useTodo
