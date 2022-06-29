import { useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import useApi from './useApi'
import { expoPushTokensApi } from '../api'

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
    shouldPlaySound: true,
    shouldSetBadge: false
  })
})

const useNotification = (notificationReceivedListener?: any) => {
  const addPushTokensApi = useApi(expoPushTokensApi.addPushTokens)

  useEffect(() => {
    addPushToken(addPushTokensApi)

    let subscription: any = null
    if (notificationReceivedListener) {
      subscription = Notifications.addNotificationReceivedListener(
        notificationReceivedListener
      )
    }
    return () => subscription?.remove()
  }, [])
}

type Content = {
  title: string
  body?: string
}
export const launchLocalNotification = (content: Content) => {
  try {
    Notifications.scheduleNotificationAsync({
      content,
      trigger: null
      // trigger: {
      //   seconds: 1 // delay 1s to show notification
      // }
    })
  } catch (err) {
    console.log(err)
  }
}

export default useNotification
