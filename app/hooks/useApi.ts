import { useState } from 'react'
import useAuth from './useAuth'
// import { store } from '../store'
// import { login, logout } from '../reducers/auth'

const useApi = (apiFun: any, transformer = (data: any) => data) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { login }: any = useAuth()

  const isAuth = ({ config: { url } }: any) => {
    return url === '/auth'
  }

  const request = async (...args: any) => {
    setLoading(true)
    const res: any = await apiFun(...args)
    setLoading(false)

    // NETWORK_ERROR 中断后台服务
    if (!res.ok) return setError(true)

    setError(false)
    const data = transformer(res.data)
    setData(data)
    if (isAuth(res)) login(res.data)
  }

  const requestWithCb = (...args: any) => {
    return new Promise((resolve, reject) => {
      setLoading(true)
      apiFun(...args).then((res: any) => {
        setLoading(false)
        resolve(res)
        if (!res.ok) {
          // NETWORK_ERROR 中断后台服务
          setError(true)
          return
        }
        setError(false)
        const data = transformer(res.data)
        setData(data)
        if (isAuth(res)) login(res.data)
      })
    })
  }

  return { data, error, loading, request, requestWithCb }
}

export default useApi
