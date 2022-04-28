import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.icon} source={require('./assets/icon.png')} />
      <Image
        blurRadius={10}
        fadeDuration={1000}
        loadingIndicatorSource={require('./assets/preview.gif')}
        style={styles.icon}
        resizeMode="contain"
        source={{
          uri: 'https://picsum.photos/200/200'
        }}
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
  icon: {
    width: 100,
    height: 100,
    backgroundColor: 'dodgerblue'
  },
})
