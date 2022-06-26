import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import jwtDecode from 'jwt-decode'
import authStorage from '../utils/authStorage'
import useAuth from './useAuth'

const useSplashScreen = () => {
  const { user, setUser, setTokenHeader } = useAuth()
  const [isReady, setIsReady] = useState<boolean>(false)

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

  const onLayoutRootView: any = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync()
    }
  }, [isReady])

  const loggedIn = !!user

  return [isReady, loggedIn, onLayoutRootView]
}

export default useSplashScreen
