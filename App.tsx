import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Button,
  Platform,
  SafeAreaView
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  const handleButtonPress = () => console.log('Button tapped')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* color：安卓是背景色，字体颜色固定白色，ios是字体颜色，且没背景色 */}
      <Button
        color="orange"
        title="Click Me"
        onPress={handleButtonPress}
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
