import axios from 'axios'

import { todoEndpoint } from '@/utils/variable'

export const updateCheckedTodo = (id: number, isActive: boolean) => {
  return new Promise(async (resolve, reject) => {
    axios
      .patch(`${todoEndpoint}/${id}`, {
        is_active: isActive,
      })
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}
