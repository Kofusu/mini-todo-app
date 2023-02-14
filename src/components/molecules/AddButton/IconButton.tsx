import React, { FC, ReactNode, useMemo } from 'react'
import { HiOutlineSortDescending, HiOutlineSortAscending } from 'react-icons/hi'
import {
  TbSortDescendingLetters,
  TbSortAscendingLetters,
  TbArrowsSort,
} from 'react-icons/tb'

import { PrimaryButton } from '@/components/atoms/Button'
import { Dropdown, MenuProps } from 'antd'
import { DropdownItems } from '@/components/atoms/DropdownItems'

interface Props {
  onSort?: (sortType: string) => any
  icon?: ReactNode
}

const IconButton: FC<Props> = ({ onSort, icon }) => {
  const items: MenuProps['items'] = useMemo(
    () => [
      {
        label: (
          <DropdownItems text="Terbaru">
            <HiOutlineSortDescending className="text-customBlue scale-150 md:scale-[1.75]" />
          </DropdownItems>
        ),
        key: '0',
      },
      {
        label: (
          <DropdownItems text="Terlama">
            <HiOutlineSortAscending className="text-customBlue scale-150 md:scale-[1.75]" />
          </DropdownItems>
        ),
        key: '1',
      },
      {
        label: (
          <DropdownItems text="A-Z">
            <TbSortAscendingLetters className="text-customBlue scale-150 md:scale-[1.75]" />
          </DropdownItems>
        ),
        key: '3',
      },
      {
        label: (
          <DropdownItems text="Z-A">
            <TbSortDescendingLetters className="text-customBlue scale-150 md:scale-[1.75]" />
          </DropdownItems>
        ),
        key: '4',
      },
      {
        label: (
          <DropdownItems text="Belum Selesai">
            <TbArrowsSort className="text-customBlue scale-150 md:scale-[1.75]" />
          </DropdownItems>
        ),
        key: '5',
      },
    ],
    []
  )

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <PrimaryButton className="flex justify-center items-center my-2 w-[37px] md:w-[54px] h-[37px] md:h-[54px] bg-inherit text-slate-400 border-slate-400 border-2">
          {icon}
        </PrimaryButton>
      </a>
    </Dropdown>
  )
}

export default IconButton
