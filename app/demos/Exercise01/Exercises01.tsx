import { NavigationContainer } from '@react-navigation/native'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../store'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts'
import AuthNavigator from '../../navigators/AuthNavigator'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'
import { useNetInfo } from '@react-native-community/netinfo'
import AppNoticeText from '../../components/AppNoticeText'

function Exercises01(props: any) {
  // const LoggedIn = useSelector((state: RootState) => state.auth.LoggedIn)
  const { user } = useContext(AuthContext)
  const LoggedIn = !!user
  const { isConnected } = useNetInfo()
  // Object {
  //   "details": Object {},
  //   "isConnected": false,
  //   "isInternetReachable": false,
  //   "isWifiEnabled": false,
  //   "type": "none",
  // }
  return (
    <NavigationContainer theme={navigationTheme}>
      {LoggedIn ? <AppNavigator /> : <AuthNavigator />}
      {!isConnected && <AppNoticeText>No Internet Connection</AppNoticeText>}
    </NavigationContainer>
  )
}

export default Exercises01
