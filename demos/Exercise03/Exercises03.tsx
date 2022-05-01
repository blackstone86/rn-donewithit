import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppButton
        title="LOGIN"
        onPress={() => console.log('tapped AppButton')}
      />
    </SafeAreaView>
  )
}
