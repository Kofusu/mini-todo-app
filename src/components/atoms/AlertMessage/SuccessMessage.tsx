import { Alert } from 'antd'
import React, { FC } from 'react'

interface Props {
  onClose?: () => void
  message: string
  desc: string
}

const SuccessMessage: FC<Props> = ({ onClose, message, desc }) => {
  return (
    <Alert
      message={message}
      description={desc}
      type="success"
      className="fixed bottom-4 left-4 right-4 z-40"
      showIcon
      closable
      onClose={onClose}
    />
  )
}

export default SuccessMessage
