import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppIcon from '../components/AppIcon'
import ListingEditScreen from '../screens/ListingEditScreen'
import AppTabBarButton from '../components/AppTabBarButton'
import COLORS from '../config/colors'
import ScreenType from '../navigators/screenTypes'
import FeedNavigator from './FeedNavigator'
import MyNavigator from '../navigators/MyNavigator'
import * as Notifications from 'expo-notifications'
import { expoPushTokensApi } from '../api'
import useApi from '../hooks/useApi'

const Tab = createBottomTabNavigator()

const addPushToken = async (addPushTokensApi: any) => {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync() // request permission on foreground directly when app's notification access is not granted!
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    const { data: pushToken } = await Notifications.getExpoPushTokenAsync()
    console.log(pushToken) // for testing sending push notifications
    addPushTokensApi.request({ token: pushToken })
  } catch (err) {
    console.log('Error occurs when getting pushToken', err)
  }
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

export default function AppNavigator() {
  const addPushTokensApi = useApi(expoPushTokensApi.addPushTokens)

  useEffect(() => {
    addPushToken(addPushTokensApi)

    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        /**
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
        console.log(notification)
      }
    )
    return () => subscription.remove()
  }, [])

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
