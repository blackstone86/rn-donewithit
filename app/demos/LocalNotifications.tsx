import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import * as Notifications from 'expo-notifications'
import AppButton from '../components/AppButton'

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 10
  }
})

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false
    }
  }
})

function LocalNotificationsScreen(props: any) {
  const content = {
    title: 'I am a one, hasty notification.'
  }
  const handlePress = () => {
    try {
      Notifications.scheduleNotificationAsync({
        content,
        trigger: null
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AppSafeAreaView style={styles.container}>
      <AppButton
        style={styles.button}
        title="Show Local Notification"
        onPress={handlePress}
      />
    </AppSafeAreaView>
  )
}

export default LocalNotificationsScreen
