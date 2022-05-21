import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppIcon from '../components/AppIcon'
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountScreen from '../screens/AccountScreen'
import COLORS from '../config/colors'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function TabBarIcon(iconName: string, { color, size }: any) {
  // color base on tabBarActiveTintColor/tabBarInactiveTintColor
  return <AppIcon name={iconName} color={color} size={size} />
}

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
