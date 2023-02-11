import React, { FC, ReactNode } from 'react'

import { poppins700 } from '@/fonts/poppinsFont'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => any
}

const PrimaryButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${poppins700.className} bg-customBlue text-customWhite align-middle text-center rounded-3xl w-[100px] md:w-[159px] h-[37px] md:h-[54px] text-sm md:text-xl shadow-customShadow`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
