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

export const addTodo = (
  activityId: number,
  title: string,
  priority: string
) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(todoEndpoint, {
        activity_group_id: activityId,
        title,
        priority,
      })
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}

export const updateTodo = (
  activityId: number,
  title: string,
  priority: string
) => {
  return new Promise(async (resolve, reject) => {
    axios
      .patch(`${todoEndpoint}/${activityId}`, {
        title,
        priority,
      })
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}

export const deleteTodo = (activityId: number) => {
  return new Promise(async (resolve, reject) => {
    axios
      .delete(todoEndpoint)
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}
