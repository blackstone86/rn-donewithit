import React from 'react'
import AppIcon from '../components/AppIcon'
import AppTabBarButton from '../components/AppTabBarButton'
import ListingEditScreen from '../screens/ListingEditScreen'
import MyNavigator from './MyNavigator'
import FeedNavigator from './FeedNavigator'
import navigate from './rootNavigation'
import ScreenType from './screenTypes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import useNotification from '../hooks/useNotification'
import COLORS from '../config/colors'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  useNotification((notification: any) => {
    /**
     * notification
     * {
     *   actionId: null,
     *   data: Object {
     *    _displayInForeground: true,
     *   },
     *   origin: "received", // "received" or "selected"
     *   remote: true,
     *   userText: null
     * }
     */
    console.log(navigate)
    console.log(notification)
  })

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY,
        headerShown: false
      }}
    >
      <Tab.Screen
        name={ScreenType.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="home" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name={ScreenType.POST}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => {
            return (
              <AppTabBarButton
                onPress={() => {
                  navigation.navigate(ScreenType.POST as never)
                }}
              />
            )
          }
        })}
      />
      <Tab.Screen
        name={ScreenType.MY}
        component={MyNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="account" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
