import React, { useState, useMemo } from 'react'
import AuthContext from './app/contexts/auth'
// import { Provider } from 'react-redux'
// import { store } from './app/store'
import logger from './app/utils/logger'
import './app/temporarySolutions/ignoreWarnings'
import AppScreen from './app/screens/AppScreen'
// import Exercise01 from './app/demos/Exercise01'
// import RemoteNotifications from './app/demos/RemoteNotifications'
// import LocalNotifications from './app/demos/LocalNotifications'

logger.start()

/**
 * options
 *
 * 1.Expo's Push Notification Service [Expo]
 * 2.One Signal [One Signal]
 * 3.Firebase Cloud Messaging [Google]
 * 4.Amazon's Simple Notification Service (SNS) [Amazon]
 */
export default function App() {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user])

  return (
    <AuthContext.Provider value={value}>
      <AppScreen />
    </AuthContext.Provider>
    // <LocalNotifications />
    // <RemoteNotifications />
  )
}
