import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'

function Exercises01(props: any) {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default Exercises01
