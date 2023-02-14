import React, { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import { PrimaryButton } from '@/components/atoms/Button'

interface Props {
  onClick?: () => any
}

const AddButton: FC<Props> = ({ onClick }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      className="my-2 flex items-center justify-center w-[100px] md:w-[159px] h-[37px] md:h-[54px] text-sm md:text-xl "
    >
      <span className="mr-1 md:mr-3">
        <AiOutlinePlus />
      </span>
      <span>Tambah</span>
    </PrimaryButton>
  )
}

export default AddButton
