import { updateActivity } from '@/api/activity'
import { ActivityDetailType } from '@/utils/types'
import React, {
  ChangeEvent,
  FC,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { BaseContainer } from '../atoms/Container'
import { InputTitlePageSection } from '../organisms/TitlePageSection'

interface Props {
  activity: ActivityDetailType
  isFetching: boolean
  refetch: any
}

const ActivityDetailPage: FC<Props> = ({ activity, isFetching, refetch }) => {
  const [inputTitle, setInputTitle] = useState<string>(activity.title)

  let timeout: any

  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  }, [timeout])

  const sendUpdateTitle = useCallback(
    (value: string) => {
      updateActivity(activity.id, value)
    },
    [updateActivity]
  )

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target

      setInputTitle(value)
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        updateActivity(activity.id, value)
      }, 2000)
    },
    [setInputTitle, timeout]
  )

  const clickHandler = useCallback(() => {}, [setInputTitle])

  return (
    <BaseContainer>
      <InputTitlePageSection
        onFinishTitle={sendUpdateTitle}
        value={inputTitle}
        onChange={changeHandler}
        onClick={clickHandler}
      />
    </BaseContainer>
  )
}

export default memo(ActivityDetailPage)
