import React, { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  text: string
  onClick?: () => void
}

const DropdownItems: FC<Props> = ({ children, text, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center">
      {children}
      <span className="ml-4">{text}</span>
    </div>
  )
}
export default DropdownItems
