import { updateActivity } from '@/api/activity'
import { ActivityDetailType } from '@/utils/types'
import React, {
  ChangeEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { BaseContainer } from '../atoms/Container'
import { InputTitlePageSection } from '../organisms/TitlePageSection'

interface Props {
  activity: ActivityDetailType
}

const ActivityDetailPage: FC<Props> = ({ activity }) => {
  const clickHandler = useCallback(() => {}, [])

  return (
    <BaseContainer>
      <InputTitlePageSection activity={activity} onClick={clickHandler} />
    </BaseContainer>
  )
}

export default memo(ActivityDetailPage)
