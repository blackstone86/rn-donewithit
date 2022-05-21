import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppIcon from '../components/AppIcon'
import ListingsScreen from '../screens/ListingsScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountScreen from '../screens/AccountScreen'
import COLORS from '../config/colors'
const Tab = createBottomTabNavigator()

function TabBarIcon(iconName: string, { color, size }: any) {
  // color base on tabBarActiveTintColor/tabBarInactiveTintColor
  return <AppIcon name={iconName} color={color} size={size} />
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
        component={ListingsScreen}
        options={{
          tabBarIcon: (props) => {
            return TabBarIcon('home', props)
          }
        }}
      />
      <Tab.Screen
        name="Post"
        component={ListingEditScreen}
        options={{
          tabBarIcon: (props) => {
            return TabBarIcon('post', props)
          }
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: (props) => {
            return TabBarIcon('account', props)
          }
        }}
      />
    </Tab.Navigator>
  )
}
