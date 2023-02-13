import { useQuery } from 'react-query'

import { getAllActivity } from '@/api/activity'
import { ActivitiesType } from '@/utils/types'

const useActivity = (activities: ActivitiesType[]) => {
  const query = useQuery('activities', getAllActivity, {
    initialData: activities,
  })

  return { ...query }
}

export default useActivity
