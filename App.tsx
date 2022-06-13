import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import logger from './app/utils/logger'
import Exercise01 from './app/demos/Exercise01'
import NetinfoScreen from './app/demos/NetinfoScreen'
import AsyncStorageScreen from './app/demos/AsyncStorageScreen'

logger.start()

/**
 * notice
 *
 * 1.Offline Strategies
 * 01.notify user with the netInfo
 * 02.disable features
 * 03.cache data
 * 04.store user actions (involve modifying data)
 *
 * 2.Caching
 * data is available across restarts but data is wiped out when uninstall the app.
 * 01.asyncStorage : limits 6MB
 * 02.SecureStore : limits 2MB
 * 03.sqlite : database engine
 *
 */
export default function App() {
  return (
    // <Provider store={store}>
    //   <Exercise01 />
    // </Provider>
    // <NetinfoScreen />
    <AsyncStorageScreen />
  )
}
