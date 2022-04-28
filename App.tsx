import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  TouchableNativeFeedback,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  const handleImagePress = () => console.log('View tapped')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* 点击没有视觉反馈效果 */}
      <TouchableNativeFeedback
        onPress={handleImagePress}
        background={TouchableNativeFeedback.Ripple(
          'rgba(255, 255, 255, 0.2)',
          false
        )}
      >
        <View style={styles.view}></View>
      </TouchableNativeFeedback>
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
  view: {
    width: 100,
    height: 80,
    backgroundColor: 'dodgerblue'
  }
})
