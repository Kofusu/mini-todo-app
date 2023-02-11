import { poppins600 } from '@/fonts/poppinsFont'
import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const BaseContainer: FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className={`${poppins600.className} w-full max-w-5xl`}>
        {children}
      </div>
    </div>
  )
}

export default BaseContainer
