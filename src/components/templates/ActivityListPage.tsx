import { addActivity, removeActivity } from '@/api/activity'
import { ActivitiesType } from '@/utils/types'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import SuccessMessage from '../atoms/AlertMessage/SuccessMessage'

import { BaseContainer } from '../atoms/Container'
import { EmptyActivityState } from '../molecules/EmptyStateImage'
import { ActivityList } from '../organisms/ActivityList'
import { TitlePageSection } from '../organisms/TitlePageSection'

interface Props {
  activities: ActivitiesType[]
  refetch?: any
}

const ActivityListPage: FC<Props> = ({ activities, refetch }) => {
  const [isOnMessage, setIsOnMessage] = useState<boolean>(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)

  let timeout: any

  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  }, [timeout])

  const addActivityHandler = (): void => {
    addActivity().then(() => {
      setIsDelete(false)
      clearTimeout(timeout)
      setIsOnMessage(true)
      refetch()
      timeout = setTimeout(() => {
        setIsOnMessage(false)
      }, 10000)
    })
  }

  const removeActivityHandler = (id: number): void => {
    removeActivity(id).then(() => {
      setIsDelete(true)
      clearTimeout(timeout)
      setIsOnMessage(true)
      refetch()
      timeout = setTimeout(() => {
        setIsOnMessage(false)
      }, 10000)
    })
  }

  const closeHandler = () => {
    clearTimeout(timeout)
    setIsOnMessage(false)
  }

  if (activities.length <= 0) {
    return (
      <BaseContainer>
        <TitlePageSection title="Activity" />
        <EmptyActivityState />
      </BaseContainer>
    )
  }

  return (
    <BaseContainer>
      <TitlePageSection title="Activity" onClick={addActivityHandler} />
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
