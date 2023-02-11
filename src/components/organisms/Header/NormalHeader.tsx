import React, { FC, memo } from 'react'

import { BaseContainer } from '@/components/atoms/Container'
import { Title } from '@/components/atoms/Title/'

const Header: FC = () => {
  return (
    <header className="h-16 md:h-[105px] flex items-center bg-customBlue sticky mb-2 shadow-customShadow">
      <BaseContainer>
        <Title
          title="TO DO LIST APP"
          className="text-xl md:text-3xl text-customWhite"
        />
      </BaseContainer>
    </header>
  )
}

export default memo(Header)
