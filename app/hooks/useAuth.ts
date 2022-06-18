import { useContext } from 'react'
import { AuthContext } from '../contexts'

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  return {
    user,
    setUser
  }
}

export default useAuth
