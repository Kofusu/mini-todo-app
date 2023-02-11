import React, { FC } from 'react'

import { Title } from '@/components/atoms/Title'
import { AddButton } from '@/components/molecules/AddButton'

const TitlePageSection: FC = () => {
  return (
    <section className="flex justify-between items-center py-4 font-bold">
      <Title title="Activity" level={2} className="text-xl md:text-3xl" />
      <AddButton />
    </section>
  )
}

export default TitlePageSection
