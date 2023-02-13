import React, { FC } from 'react'

import { Title } from '../Title'

const PageLoading: FC = () => {
  return (
    <div className="fixed z-50 inset-0 w-100vh h-100vh flex justify-center items-center bg-customBlack bg-opacity-75">
      <Title title="Loading..." className="text-customWhite" />
    </div>
  )
}

export default PageLoading
