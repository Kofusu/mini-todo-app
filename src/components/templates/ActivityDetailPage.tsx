import { ActivityDetailType } from '@/utils/types'
import React, { FC, memo } from 'react'
import { BaseContainer } from '../atoms/Container'
import { TitlePageSection } from '../organisms/TitlePageSection'

interface Props {
  activityDetail: ActivityDetailType
  isFetching: boolean
  refetch: any
}

const ActivityDetailPage: FC<Props> = ({
  activityDetail,
  isFetching,
  refetch,
}) => {
  return <BaseContainer></BaseContainer>
}

export default memo(ActivityDetailPage)
