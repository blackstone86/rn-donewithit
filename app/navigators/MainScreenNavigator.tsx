import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppIcon from '../components/AppIcon'
import ListingsScreen from '../screens/ListingsScreen'
import AccountScreen from '../screens/AccountScreen'
import COLORS from '../config/colors'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabBarIcon(iconName: string, { color, size }: any) {
  // color base on tabBarActiveTintColor/tabBarInactiveTintColor
  return <AppIcon name={iconName} color={color} size={size} />
}

function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
    </Stack.Navigator>
  )
}

function AccountNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  )
}

export default function MainScreenNavigator() {
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
          tabBarIcon: (props) => {
            return TabBarIcon('home', props)
          }
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: (props) => {
            return TabBarIcon('account', props)
          }
        }}
      />
    </Tab.Navigator>
  )
}
