import { Space } from 'antd'
import React, { FC } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

interface Props {
  title: string
  typeText?: 'activity' | 'list'
}

const DeleteModal: FC<Props> = ({ title, typeText = 'list' }) => {
  return (
    <Space direction="vertical" size="middle" className="items-center my-4">
      <FiAlertTriangle size={100} className="text-red-500" />
      <p className="text-center text-base md:text-xl">
        Apakah anda yakin menghapus {typeText} “{title}”?
      </p>
    </Space>
  )
}

export default DeleteModal
