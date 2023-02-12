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

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onFinishTitle: (value: string) => void
}

const InputTodo: FC<Props> = ({ value, onChange, onFinishTitle }) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    return () => {
      setIsLoading(false)
    }
  }, [setIsLoading])

  const clickHandler = useCallback(() => {
    setIsFocusInput(true)
    inputRef.current?.focus()
  }, [inputRef])

  const displayLoading = useCallback(() => {
    setIsLoading(true)
  }, [setIsLoading])

  const focusOn = useCallback(() => {
    setIsFocusInput(true)
  }, [setIsFocusInput])

  const focusOff = useCallback(() => {
    onFinishTitle(value)
    setIsFocusInput(false)
  }, [setIsFocusInput])

  const onEnter = useCallback(() => {
    inputRef.current?.blur()
  }, [])

  return (
    <div className="flex items-center justify-between w-full border-slate-400 border-b-2 md:border-b-0 md:mr-8 my-2 md:w-fit">
      <Link href="/" onClick={displayLoading}>
        <AiOutlineLeft className="md:scale-[2.75] hidden md:inline-block cursor-pointer" />
      </Link>
      <Input.Group
        className={`mx-2 border-slate-400 ${
          isFocusInput ? 'md:border-b-2' : 'md:border-b-0'
        }`}
      >
        <Input
          onPressEnter={onEnter}
          onFocus={focusOn}
          onBlur={focusOff}
          ref={inputRef}
          value={value}
          onChange={onChange}
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
