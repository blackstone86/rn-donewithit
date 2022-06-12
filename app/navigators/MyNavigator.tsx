import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen'
import ListingsScreen from '../screens/ListingsScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ScreenType from '../navigators/screenTypes'
const Stack = createNativeStackNavigator()

export default function MyNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ScreenType.ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={ScreenType.LISTING} component={ListingsScreen} />
      <Stack.Screen name={ScreenType.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  )
}
