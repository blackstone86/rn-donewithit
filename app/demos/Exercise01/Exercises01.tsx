import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigator from '../../navigators/AppNavigator'
import styles from './styles'

function Exercises01(props: any) {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default Exercises01
