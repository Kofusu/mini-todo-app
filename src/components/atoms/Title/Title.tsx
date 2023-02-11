import React, { FC } from 'react'
import { Typography } from 'antd'

import { poppins700 } from '@/fonts/poppinsFont'

interface Props {
  title: string
  level?: 1 | 2 | 3 | 4 | 5 | undefined
  className?: string
}

const Title: FC<Props> = ({ title, level, className }) => {
  return (
    <Typography.Title
      className={`${poppins700.className} ${className} mb-0 font-bold`}
      level={level}
    >
      {title}
    </Typography.Title>
  )
}

export default Title
