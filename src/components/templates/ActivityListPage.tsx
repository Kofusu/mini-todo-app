import { addActivity } from '@/api/activity'
import React, { FC, memo, useCallback, useState } from 'react'
import SuccessMessage from '../atoms/AlertMessage/SuccessMessage'

import { BaseContainer } from '../atoms/Container'
import { PageLoading } from '../atoms/PageLoading'
import { EmptyActivityState } from '../molecules/EmptyStateImage'
import { ActivityList } from '../organisms/ActivityList'
import { TitlePageSection } from '../organisms/TitlePageSection'

interface Props {
  activities: {
    id: number
    title: string
    created_at: string
  }[]
  refetch?: any
  isFetching: boolean
}

const ActivityListPage: FC<Props> = ({ activities, refetch, isFetching }) => {
  const [isOnMessage, setIsOnMessage] = useState<boolean>(false)

  let timeout: any

  const addActivityHandler = (): void => {
    clearTimeout(timeout)
    addActivity().then(() => {
      setIsOnMessage(true)
      refetch()
      timeout = setTimeout(() => {
        setIsOnMessage(false)
      }, 10000)
    })
  }

  const closeHandler = useCallback(() => {
    clearTimeout(timeout)
    setIsOnMessage(false)
  }, [setIsOnMessage])

  if (isFetching) {
    return <PageLoading />
  }

  if (activities.length <= 0) {
    return (
      <BaseContainer>
        <TitlePageSection />
        <EmptyActivityState />
      </BaseContainer>
    )
  }

  return (
    <BaseContainer>
      <TitlePageSection onClick={addActivityHandler} />
      <ActivityList activities={activities} />
      {isOnMessage && (
        <SuccessMessage
          message="Success"
          desc="'New Activitiy' added"
          onClose={closeHandler}
        />
      )}
    </BaseContainer>
  )
}

export default memo(ActivityListPage)
