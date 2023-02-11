import React, { FC, memo } from 'react'

import { Title } from '@/components/atoms/Title'
import { AddButton } from '@/components/molecules/AddButton'

interface Props {
  onClick?: () => any
}

const TitlePageSection: FC<Props> = ({ onClick }) => {
  return (
    <section className="flex justify-between items-center py-4 font-bold">
      <Title title="Activity" level={2} className="text-xl md:text-3xl" />
      <AddButton onClick={onClick} />
    </section>
  )
}

export default memo(TitlePageSection)
