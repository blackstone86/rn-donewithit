import React, { useState, useMemo } from 'react'
import AuthContext from './app/contexts/auth'
// import { Provider } from 'react-redux'
// import { store } from './app/store'
import logger from './app/utils/logger'
import Exercise01 from './app/demos/Exercise01'
// import NetinfoScreen from './app/demos/NetinfoScreen'
// import AsyncStorageScreen from './app/demos/AsyncStorageScreen'
// import CacheScreen from './app/demos/CacheScreen'

logger.start()

/**
 * notice
 *
 * 1.Offline Strategies
 * 01.notify user with the netInfo
 * 02.disable features
 * 03.cache data
 * 04.store user actions (involve modifying data)
 *   - complexity solution
 *     - realm
 *     - Firebase
 *
 * 2.Caching
 * data is available across restarts but data is wiped out when uninstall the app.
 * 01.asyncStorage : limits 6MB
 *    under the hood:
 *    Android : SQLite
 *    IOS : Dictionary/Files
 * 02.SecureStore : limits 2MB
 * 03.sqlite : database engine
 *
 * 3.Cache listings data with asyncStorage
 */
export default function App() {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user])

  return (
    <AuthContext.Provider value={value}>
      <Exercise01 />
    </AuthContext.Provider>
    // <Provider store={store}>
    //   <Exercise01 />
    // </Provider>
    // <NetinfoScreen />
    // <AsyncStorageScreen />
    // <CacheScreen />
  )
}
