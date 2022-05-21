import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppIcon from '../components/AppIcon'
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountScreen from '../screens/AccountScreen'
import AppTabBarButton from '../components/AppTabBarButton'
import COLORS from '../config/colors'
import { useNavigation } from '@react-navigation/native'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetailsScreen"
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  )
}

export default function MainNavigator() {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="home" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name="Post"
        component={ListingEditScreen}
        options={{
          tabBarButton: () => {
            return (
              <AppTabBarButton
                onPress={() => {
                  navigation.navigate('Post' as never)
                }}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="account" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
