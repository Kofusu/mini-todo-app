import axios from 'axios'

import { activityEndpoint } from '@/utils/variable'

export const getAllActivity = () => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(activityEndpoint)
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}

export const getOneActivity = (id: number) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(`${activityEndpoint}/${id}`)
      .then((res) => resolve(res.data))
      .catch(() => reject(false))
  })
}

export const addActivity = () => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(activityEndpoint, {
        title: 'New Activity',
        email: 'wow@gmail.com',
      })
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}

export const removeActivity = (id: number) => {
  return new Promise(async (resolve, reject) => {
    axios
      .delete(`${activityEndpoint}/${id}`)
      .then((res) => resolve(res.data.data))
      .catch(() => reject(false))
  })
}
