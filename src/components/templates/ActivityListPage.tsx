import React, { FC, memo } from 'react'

import { BaseContainer } from '../atoms/Container'
import { EmptyActivityState } from '../molecules/EmptyStateImage'
import { ActivityList } from '../organisms/ActivityList'
import { TitlePageSection } from '../organisms/TitlePageSection'

interface Props {
  activities: {
    id: number
    title: string
    created_at: string
  }[]
}

const ActivityListPage: FC<Props> = ({ activities }) => {
  // TODO: Edit when go to API
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
      <TitlePageSection />
      <ActivityList activities={activities} />
    </BaseContainer>
  )
}

export default memo(ActivityListPage)
