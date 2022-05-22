import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthNavigator from '../../navigators/AuthNavigator'
import navigationTheme from '../../navigators/navigationTheme'

function Exercises01(props: any) {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default Exercises01
