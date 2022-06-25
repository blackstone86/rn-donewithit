import { NavigationContainer } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import AuthNavigator from '../../navigators/AuthNavigator'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'
import { useNetInfo } from '@react-native-community/netinfo'
import AppNoticeText from '../../components/AppNoticeText'
import * as SplashScreen from 'expo-splash-screen'
import authStorage from '../../utils/authStorage'
import jwtDecode from 'jwt-decode'
import useAuth from '../../hooks/useAuth'
import styles from './styles'

export default function AppScreen(props: any) {
  const { user, setUser, setTokenHeader } = useAuth()
  const [isReady, setIsReady] = useState<boolean>(false)
  const { isConnected } = useNetInfo()

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    if (token) {
      setTokenHeader(token)
      setUser(jwtDecode(token))
    }
  }

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        await restoreToken()
      } catch (e) {
        console.log(e)
      } finally {
        // Tell the application to render
        setIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync()
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  const LoggedIn = !!user

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigationTheme}>
        {LoggedIn ? <AppNavigator /> : <AuthNavigator />}
        {!isConnected && <AppNoticeText>No Internet Connection</AppNoticeText>}
      </NavigationContainer>
    </View>
  )
}
