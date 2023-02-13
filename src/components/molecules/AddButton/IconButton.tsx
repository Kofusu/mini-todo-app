import React, { FC, ReactNode } from 'react'

import { PrimaryButton } from '@/components/atoms/Button'

interface Props {
  onClick?: () => any
  icon?: ReactNode
}

const IconButton: FC<Props> = ({ onClick, icon }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      className="flex justify-center items-center my-2 w-[37px] md:w-[54px] h-[37px] md:h-[54px] bg-inherit text-slate-400 border-slate-400 border-2"
    >
      {icon}
    </PrimaryButton>
  )
}

export default IconButton
