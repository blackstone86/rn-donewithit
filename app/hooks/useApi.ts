import { useContext, useState } from 'react'
import { AuthContext } from '../contexts'
// import { store } from '../store'
// import { login, logout } from '../reducers/auth'
import client from '../api/client'
import jwtDecode from 'jwt-decode'
import authStorage from '../utils/authStorage'

const global = {
  setUser: (user: any) => null
}

const setAuthTokenHeader = ({ config: { url }, data: token, ok }: any) => {
  if (ok && url === '/auth') {
    client.setHeaders({
      'x-auth-token': token
    })
    authStorage.setToken(token)

    const user = jwtDecode(token)
    global.setUser(user)
    // store.dispatch(login())
  }
}

export const removeAuthTokenHeader = () => {
  client.setHeaders({
    'x-auth-token': ''
  })
  authStorage.setToken('')

  global.setUser(null)
  // store.dispatch(logout())
}

const useApi = (apiFun: any, transformer = (data: any) => data) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { setUser }: any = useContext(AuthContext)

  global.setUser = setUser

  const request = async (...args: any) => {
    setLoading(true)
    const res: any = await apiFun(...args)
    setLoading(false)

    // NETWORK_ERROR 中断后台服务
    if (!res.ok) return setError(true)

    setError(false)
    const data = transformer(res.data)
    setData(data)
    setAuthTokenHeader(res)
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
        setAuthTokenHeader(res)
      })
    })
  }

  return { data, error, loading, request, requestWithCb }
}

export default useApi
