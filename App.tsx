import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  ActivityIndicator
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象ssss
export default function App() {
  const handleTextPress = () => console.log('Text tapped')
  const handleImagePress = () => console.log('Image tapped')
  const handleButtonPress = () => console.log('Button tapped')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={handleTextPress}>
        Hello React Native
      </Text>
      {/* color：安卓是背景色，字体颜色固定白色，ios是字体颜色，且没背景色 */}
      <Button
        color="orange"
        title="Click Me"
        onPress={handleButtonPress}
      />
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
      {/* 点击背景有蒙层效果 */}
      <TouchableHighlight onPress={handleImagePress}>
        <Image style={styles.icon} source={require('./assets/icon.png')} />
      </TouchableHighlight>
      {/* 点击有渐变效果 */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image style={styles.icon} source={require('./assets/icon.png')} />
      </TouchableOpacity>
      {/* 点击没有视觉反馈效果 */}
      <TouchableWithoutFeedback onPress={handleImagePress}>
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
      </TouchableWithoutFeedback>
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
  view: {
    width: 100,
    height: 80,
    backgroundColor: 'dodgerblue'
  }
})
