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
