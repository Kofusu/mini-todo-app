import { getAllActivity } from '@/api/activity'
import { useQuery } from 'react-query'

interface ActivitiesType {
  id: number
  title: string
  created_at: string
}

const useActivity = (activities: ActivitiesType[]) => {
  const query = useQuery('activities', getAllActivity, {
    initialData: activities,
  })

  return { ...query }
}

export default useActivity
