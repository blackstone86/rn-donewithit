import React, { useState } from 'react'
import {
  StyleSheet,
  Button,
  Platform,
  SafeAreaView,
  StatusBar
} from 'react-native'

export default function App() {
  const handleButtonPress = () => console.log('Button tapped')
  return (
    <SafeAreaView style={styles.container}>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  }
})
