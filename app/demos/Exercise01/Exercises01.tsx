import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthNavigator from '../../navigators/AuthNavigator'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function Exercises01(props: any) {
  const LoggedIn = useSelector((state: RootState) => state.auth.LoggedIn)
  return (
    <NavigationContainer theme={navigationTheme}>
      {LoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default Exercises01
