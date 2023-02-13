import { useCallback, useEffect, useState } from 'react'

import { getOneActivity } from '@/api/activity'
import { ActivityDetailType } from '@/utils/types'

const useTodo = (activityDetail: ActivityDetailType) => {
  const [data, setData] = useState<ActivityDetailType>(activityDetail)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      await getOneActivity(activityDetail?.id).then((res: any) => {
        setData(res)
      })
    }
    getData()
  }, [activityDetail?.id, setData])

  const refetch = useCallback(async () => {
    setIsFetching(true)
    getOneActivity(activityDetail?.id).then((res: any) => {
      setData(res)
      setIsFetching(false)
    })
  }, [setIsFetching, activityDetail?.id])

  return { data, isFetching, refetch }
}

export default useTodo
