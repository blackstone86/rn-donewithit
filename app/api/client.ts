import { create } from 'apisauce'
import cache from '../utils/cache'

const BASE_URL = 'http://192.168.31.94:9000/api'
const DEFAULT_TIMEOUT = 6 // unit second

const apiClient = create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT * 1e3
})

const { get } = apiClient

// network first , cache second
apiClient.get = async (url, params, axiosConfig) => {
  const key = url + JSON.stringify(params)

  const res: any = await get(url, params, axiosConfig)
  if (res.ok) {
    cache.store(key, res.data)
    return res
  }

  const data = await cache.get(key)

  return data
    ? {
        ok: true,
        data
      }
    : res
}

export default apiClient
