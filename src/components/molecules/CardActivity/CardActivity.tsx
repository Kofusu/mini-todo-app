import React, { FC, MouseEvent } from 'react'
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
}

const CardActivity: FC<Props> = ({ activity }) => {
  const deleteHandler = (e: MouseEvent<SVGElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log(`Hapus ID: ${activity.id}`)
  }

  return (
    <Link href={`/activity-groups/${activity.id}`}>
      <Card
        hoverable
        className="p-0 h-[150px] max-w-[150px] md:h-[235px] md:max-w-[235px] shadow-customShadow relative"
      >
        <Title
          level={3}
          title={activity.title}
          className={`${poppins400.className} text-sm md:text-xl`}
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
