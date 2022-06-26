import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNoticeText from '../../components/AppNoticeText'
import AuthNavigator from '../../navigators/AuthNavigator'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'
import { useNetInfo } from '@react-native-community/netinfo'
import useSplashScreen from '../../hooks/useSplashScreen'
import styles from './styles'

export default function AppScreen(props: any) {
  const [isReady, loggedIn, onLayoutRootView] = useSplashScreen()
  const { isConnected } = useNetInfo()

  if (!isReady) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigationTheme}>
        {loggedIn ? <AppNavigator /> : <AuthNavigator />}
        {!isConnected && <AppNoticeText>No Internet Connection</AppNoticeText>}
      </NavigationContainer>
    </View>
  )
}
