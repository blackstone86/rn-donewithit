import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  const handleImagePress = () => console.log('Image tapped')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* 点击背景有蒙层效果 */}
      <TouchableHighlight onPress={handleImagePress}>
        <Image style={styles.icon} source={require('./assets/icon.png')} />
      </TouchableHighlight>
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
  icon: {
    width: 100,
    height: 100,
    backgroundColor: 'dodgerblue'
  },
})
