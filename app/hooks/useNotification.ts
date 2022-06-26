import { useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import useApi from './useApi'
import { expoPushTokensApi } from '../api'
import navigate from '../navigators/rootNavigation'

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

const useNotification = () => {
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
        console.log(navigate)
        console.log(notification)
      }
    )
    return () => subscription.remove()
  }, [])
}

export default useNotification
