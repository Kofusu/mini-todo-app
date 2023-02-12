import React, { FC, memo } from 'react'

import { Title } from '@/components/atoms/Title'
import { AddButton } from '@/components/molecules/AddButton'
import { useRouter } from 'next/router'

interface Props {
  title: string
  type?: 'normal' | 'input'
  onClick?: () => any
}

const TitlePageSection: FC<Props> = ({ onClick, title }) => {
  const router = useRouter()

  return (
    <section
      className={`flex justify-between items-center py-4 font-bold flex-wrap`}
    >
      <Title title={title} level={2} className="text-xl md:text-3xl" />
      <AddButton onClick={onClick} />
    </section>
  )
}

export default memo(TitlePageSection)
