import { NavigationContainer } from '@react-navigation/native'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../store'
import React, { useState } from 'react'
import AuthNavigator from '../../navigators/AuthNavigator'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'
import { useNetInfo } from '@react-native-community/netinfo'
import AppNoticeText from '../../components/AppNoticeText'
import AppLoading from 'expo-app-loading'
import authStorage from '../../utils/authStorage'
import jwtDecode from 'jwt-decode'
import useAuth from '../../hooks/useAuth'

function Exercises01(props: any) {
  // const LoggedIn = useSelector((state: RootState) => state.auth.LoggedIn)
  const { user, setUser, setTokenHeader } = useAuth()

  const [isReady, setIsReady] = useState<boolean>(false)
  const { isConnected } = useNetInfo()

  // Object {
  //   "details": Object {},
  //   "isConnected": false,
  //   "isInternetReachable": false,
  //   "isWifiEnabled": false,
  //   "type": "none",
  // }

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    if (token) {
      setTokenHeader(token)
      setUser(jwtDecode(token))
    }
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={(err) => {
          console.log(err)
        }}
      />
    )

  const LoggedIn = !!user

  return (
    <NavigationContainer theme={navigationTheme}>
      {LoggedIn ? <AppNavigator /> : <AuthNavigator />}
      {!isConnected && <AppNoticeText>No Internet Connection</AppNoticeText>}
    </NavigationContainer>
  )
}

export default Exercises01
