import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ScreenType from '../navigators/screenTypes'
import AuthNavigator from './AuthNavigator'
const Stack = createNativeStackNavigator()

export default function MyNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ScreenType.ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={ScreenType.MESSAGES} component={MessagesScreen} />
      {/* <Stack.Screen name={ScreenType.AUTH} component={AuthNavigator} /> */}
    </Stack.Navigator>
  )
}
