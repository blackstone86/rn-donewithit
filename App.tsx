import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Button,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  const handleAlert = () => {
    Alert.alert(
      "My title",
      "My message", [
        {
          text: 'Later',
          onPress: () => console.log("Later Tapped")
        },
        {
          text: 'Cancel',
          style: 'cancel', // 安卓系统无效
          onPress: () => console.log("Cancel Tapped")
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Tapped")
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    )
  }

  const handlePrompt = () => {
    // 只在ios生效
    Alert.prompt(
      "My title",
      "My message",
      (text) => console.log(text)
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* color：安卓是背景色，字体颜色固定白色，ios是字体颜色，且没背景色 */}
      <Button
        color="orange"
        title="Show alert"
        onPress={handleAlert}
      />
      <Button
        color="dodgerblue"
        title="Show prompt"
        onPress={handlePrompt}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
