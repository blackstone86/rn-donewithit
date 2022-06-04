import { ApiResponse } from 'apisauce'
import { useEffect, useState } from 'react'

const useApi = (
  apiFun: () => Promise<ApiResponse<any, any>>,
  transformer = (data: any) => data
) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const feedData = async () => {
    setLoading(true)
    const res: any = await apiFun()
    setLoading(false)

    // NETWORK_ERROR 中断后台服务
    if (!res.ok) return setError(true)

    setError(false)
    const data = transformer(res.data)
    setData(data)
  }
  useEffect(() => {
    feedData()
  }, [])

  return [data, error, loading]
}

export default useApi
