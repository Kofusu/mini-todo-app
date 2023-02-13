import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Input, InputRef } from 'antd'
import { HiOutlinePencil } from 'react-icons/hi'
import { AiOutlineLeft } from 'react-icons/ai'
import Link from 'next/link'
import { PageLoading } from '@/components/atoms/PageLoading'
import { updateActivity } from '@/api/activity'
import { ActivityDetailType } from '@/utils/types'
import { useRouter } from 'next/router'

interface Props {
  activity: ActivityDetailType
}

const InputTodo: FC<Props> = ({ activity }) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isInputTouched, setIsInputTouched] = useState<boolean>(false)
  const [inputTitle, setInputTitle] = useState<string>(activity?.title)
  const router = useRouter()

  const inputRef = useRef<InputRef>(null)

  let timeout: any

  useEffect(() => {
    return () => {
      clearTimeout(timeout)
      setIsLoading(false)
    }
  }, [timeout, setIsLoading])

  const sendUpdateTitle = useCallback(
    (value: string) => {
      updateActivity(activity?.id, value)
    },
    [activity?.id]
  )

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setIsInputTouched(true)

    setInputTitle(value)
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      updateActivity(activity?.id, value)
    }, 2000)
  }

  const clickHandler = useCallback(() => {
    setIsFocusInput(true)
    inputRef.current?.focus()
  }, [inputRef, setIsFocusInput])

  const displayLoading = useCallback(() => {
    setIsLoading(true)
    router.back()
  }, [setIsLoading, router])

  const focusOn = useCallback(() => {
    setIsFocusInput(true)
  }, [setIsFocusInput])

  const focusOff = useCallback(() => {
    sendUpdateTitle(inputTitle)
    setIsFocusInput(false)
  }, [setIsFocusInput, sendUpdateTitle, inputTitle])

  const onEnter = useCallback(() => {
    inputRef.current?.blur()
  }, [inputRef])

  return (
    <div className="flex items-center justify-between w-full border-slate-400 border-b-2 md:border-b-0 md:mr-8 my-2 md:w-fit">
      <div onClick={displayLoading}>
        <AiOutlineLeft className="md:scale-[2.75] hidden md:inline-block cursor-pointer" />
      </div>
      <Input.Group
        className={`mx-2 border-b-2 ${
          isFocusInput ? 'md:border-slate-400' : 'md:border-none'
        }`}
      >
        <Input
          onPressEnter={onEnter}
          onFocus={focusOn}
          onBlur={focusOff}
          ref={inputRef}
          value={isInputTouched ? inputTitle : activity?.title}
          onChange={changeHandler}
          maxLength={20}
          className={`bg-inherit focus:shadow-none border-none text-lg md:text-4xl px-0 md:mx-4 focus:border-b-0 ${
            isFocusInput ? 'md:w-96' : 'md:w-56'
          }`}
        />
      </Input.Group>
      <HiOutlinePencil
        onClick={clickHandler}
        className="text-slate-500 scale-125 md:scale-150 cursor-pointer"
      />
      {isLoading && <PageLoading />}
    </div>
  )
}

export default InputTodo
