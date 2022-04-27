import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  // let x = 1;
  console.log('App executed')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello React Native</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
