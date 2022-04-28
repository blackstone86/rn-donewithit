import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Button,
  Platform,
  SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

export default function App() {
  const handleButtonPress = () => console.log('Button tapped')
  return (
    // <SafeAreaView style={container}> not recommend
    // <SafeAreaView style={{backgroundColor: '#fff'}}> not recommend, the project without typescript configuration, vscode does not show wrong infomation with attribute name's spelling
    <SafeAreaView style={[styles.container, styles.containerOverride]}>
      <StatusBar style="auto" />
      {/*
        1.Color of the text (iOS), or background color of the button (Android).
        2.button component has not 'style' atrribute
      */}
      <Button
        color="dodgerblue"
        title="Click Me"
        onPress={handleButtonPress}
      />
    </SafeAreaView>
  )
}

/**
 * why not recommend to use object as style, because 2 reasons:
 * 1.StyleSheet.create will verify the stylesheet, eg. spelling of attribute name
 * 2.React Native team optimize the stylesheet api, and will use in the future version.
 */

const container = { // not recommend
  paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
  flex: 1,
  backgroundColor: 'orange',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

const styles = StyleSheet.create({ // recommend
  container: {
    paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerOverride: {
    backgroundColor: 'orange',
  }
})
