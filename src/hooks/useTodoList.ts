import { getOneActivity } from '@/api/activity'
import { useQuery } from 'react-query'

import { ActivityDetailType } from '@/utils/types'

const useTodo = (activityDetail: ActivityDetailType) => {
  const getActivity = () => {
    return getOneActivity(activityDetail.id)
  }
  const query = useQuery(`todo-${activityDetail.id}`, getActivity, {
    initialData: activityDetail,
  })

  return { ...query }
}

export default useTodo
