import { addActivity, removeActivity } from '@/api/activity'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
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
  const [isDelete, setIsDelete] = useState<boolean>(false)

  let timeout: any

  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const addActivityHandler = useCallback((): void => {
    addActivity().then(() => {
      setIsDelete(false)
      clearTimeout(timeout)
      setIsOnMessage(true)
      refetch()
      timeout = setTimeout(() => {
        setIsOnMessage(false)
      }, 10000)
    })
  }, [setIsOnMessage, refetch, timeout, setIsDelete])

  const removeActivityHandler = useCallback(
    (id: number): void => {
      removeActivity(id).then(() => {
        setIsDelete(true)
        clearTimeout(timeout)
        setIsOnMessage(true)
        refetch()
        timeout = setTimeout(() => {
          setIsOnMessage(false)
        }, 10000)
      })
    },
    [setIsOnMessage, refetch, timeout, setIsDelete]
  )

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
      <ActivityList activities={activities} onRemove={removeActivityHandler} />
      {isOnMessage && (
        <SuccessMessage
          message="Action Success"
          desc={
            isDelete ? 'Deletion Activity Success' : '" New Activity " Added'
          }
          onClose={closeHandler}
        />
      )}
    </BaseContainer>
  )
}

export default memo(ActivityListPage)
