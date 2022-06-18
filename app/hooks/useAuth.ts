import { useContext } from 'react'
import { AuthContext } from '../contexts'
import client from '../api/client'
import jwtDecode from 'jwt-decode'
import authStorage from '../utils/authStorage'

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  const login = (token: string) => {
    client.setHeaders({
      'x-auth-token': token
    })
    authStorage.setToken(token)

    const user = jwtDecode(token)
    setUser(user)
  }

  const logout = () => {
    client.setHeaders({
      'x-auth-token': ''
    })
    authStorage.setToken('')

    setUser(null)
  }

  const setTokenHeader = (token: string) => {
    client.setHeaders({
      'x-auth-token': token
    })
  }

  return {
    user,
    setUser,
    login,
    logout,
    setTokenHeader
  }
}

export default useAuth
