import React, { FC } from 'react'

import { monthIndo } from '@/utils/variable'

interface Props {
  date: string
  className?: string
}

const DateIndonesia: FC<Props> = ({ date, className }) => {
  const datePost = new Date(date)
  const dateFormat = `${datePost.getDate()} ${
    monthIndo[datePost.getMonth()]
  } ${datePost.getFullYear()}`

  return (
    <span
      className={`${className} absolute bottom-4 left-5 text-slate-400 text-[0.55rem] md:text-base`}
    >
      {dateFormat}
    </span>
  )
}

export default DateIndonesia
