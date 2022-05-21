import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainNavigator from './MainNavigator'
import ScreenType from './screenTypes'
const Stack = createNativeStackNavigator()

export default function WelcomeScreenNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ScreenType.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ScreenType.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ScreenType.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ScreenType.MAIN} component={MainNavigator} />
    </Stack.Navigator>
  )
}
