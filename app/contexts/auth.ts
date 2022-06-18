import React from 'react'

type AuthContextType = {
  user: any
  setUser: any
}

const defaultAuthContext: AuthContextType = {
  user: null,
  setUser: (user: any) => null
}

const AuthContext = React.createContext(defaultAuthContext)

export default AuthContext
