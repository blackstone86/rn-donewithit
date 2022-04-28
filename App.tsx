import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello React Native</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
})
