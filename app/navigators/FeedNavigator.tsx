import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import ScreenType from '../navigators/screenTypes'
const Stack = createNativeStackNavigator()

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name={ScreenType.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={ScreenType.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  )
}
