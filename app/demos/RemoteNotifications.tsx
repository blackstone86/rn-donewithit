import React, { useEffect } from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'
import * as Notifications from 'expo-notifications'

/**
 * Steps
 *
 * 1. register the app to get a token
 * 2. store the token on the server
 * 3. send a notification
 * 4. handle received notifications
 */

const getPushToken = async () => {
  try {
    const { granted } = await Notifications.getPermissionsAsync()
    if (!granted) {
      alert('You need to enable permission to access notifications!')
    }
    const { data: pushToken } = await Notifications.getExpoPushTokenAsync()
    console.log(pushToken)
  } catch (err) {
    console.log('Error occurs when getting pushToken', err)
  }
}

function RemoteNotifications(props: any) {
  useEffect(() => {
    getPushToken()
  }, [])

  return (
    <AppSafeAreaView>
      <AppText style={{ fontSize: 30, textAlign: 'center' }}>
        Notifications
      </AppText>
    </AppSafeAreaView>
  )
}

export default RemoteNotifications
