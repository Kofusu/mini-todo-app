import React, { FC } from 'react'

import { PrimaryButton } from '@/components/atoms/Button'

interface Props {
  onClick?: () => any
}

const AddButton: FC<Props> = ({ onClick }) => {
  return (
    <PrimaryButton onClick={onClick} className="my-2">
      <span className="mr-[6px] md:mr-3 flex-1">+</span>
      <span>Tambah</span>
    </PrimaryButton>
  )
}

export default AddButton
