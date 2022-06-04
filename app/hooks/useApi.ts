import { useState } from 'react'

const useApi = (apiFun: any, transformer = (data: any) => data) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const request = async (...args: any) => {
    setLoading(true)
    const res: any = await apiFun(...args)
    setLoading(false)

    // NETWORK_ERROR 中断后台服务
    if (!res.ok) return setError(true)

    setError(false)
    const data = transformer(res.data)
    setData(data)
  }

  return { data, error, loading, request }
}

export default useApi
