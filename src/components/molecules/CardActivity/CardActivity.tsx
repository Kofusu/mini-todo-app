import React, { FC, MouseEvent, useCallback, useEffect, useState } from 'react'
import { Card } from 'antd'
import Link from 'next/link'

import { Title } from '@/components/atoms/Title'
import { poppins400 } from '@/fonts/poppinsFont'
import { DateIndonesia } from '@/components/atoms/DateIndonesia'
import { HiOutlineTrash } from 'react-icons/hi'

interface Props {
  activity: {
    id: number
    title: string
    created_at: string
  }
  onRemove: (id: number) => void
}

const CardActivity: FC<Props> = ({ activity, onRemove }) => {
  const deleteHandler = useCallback((e: MouseEvent<SVGElement>) => {
    e.stopPropagation()
    e.preventDefault()
    onRemove(activity.id)
  }, [])

  return (
    <Link href={`/activity-groups/${activity.id}`}>
      <Card
        hoverable
        className="h-[150px] max-w-[150px] md:h-[235px] md:max-w-[235px] shadow-customShadow relative"
      >
        <Title
          level={3}
          title={activity.title}
          className={`${poppins400.className} text-sm md:text-xl absolute top-4 left-5 right-5 bottom-8`}
        />
        <DateIndonesia date={activity.created_at} />
        <HiOutlineTrash
          onClick={deleteHandler}
          className="absolute md:scale-[1.75] bottom-[18px] md:bottom-6 right-4 md:right-6 hover:text-red-500"
        />
      </Card>
    </Link>
  )
}

export default CardActivity
