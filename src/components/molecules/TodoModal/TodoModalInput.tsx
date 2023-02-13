import { Input, Select, Space } from 'antd'
import React, { ChangeEvent, FC } from 'react'
import { PriorityOption } from '../Option'

interface Props {
  namaList: string
  priority: string
  nameOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
  prioOnChange?: (e: string) => void
}

const TodoModalInput: FC<Props> = ({
  namaList,
  nameOnChange,
  prioOnChange,
}) => {
  return (
    <form
      className="border-y-2 py-4 md:py-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <Space direction="vertical" size="large" className="w-full">
        <Input.Group>
          <Space direction="vertical" size="small" className="w-full">
            <label className="text-base md:text-lg">Nama List Item</label>
            <Input
              value={namaList}
              onChange={nameOnChange}
              className="p-2 md:p-4"
            />
          </Space>
        </Input.Group>
        <Input.Group>
          <Space direction="vertical" size="small" className="w-full">
            <label className="text-base md:text-lg">Priority</label>
            <Select
              onSelect={prioOnChange}
              className="w-full max-w-xs"
              placeholder="Pilih Priority"
            >
              <Select.Option value="very-high">
                <PriorityOption value="very-high" title="Very High" />
              </Select.Option>
              <Select.Option value="high">
                <PriorityOption value="high" title="High" />
              </Select.Option>
              <Select.Option value="normal">
                <PriorityOption value="normal" title="Medium" />
              </Select.Option>
              <Select.Option value="low">
                <PriorityOption value="low" title="Low" />
              </Select.Option>
              <Select.Option value="very-low">
                <PriorityOption value="very-low" title="Very Low" />
              </Select.Option>
            </Select>
          </Space>
        </Input.Group>
      </Space>
    </form>
  )
}

export default TodoModalInput
