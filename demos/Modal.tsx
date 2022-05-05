import React, { useCallback } from 'react'
import { GestureResponderEvent, StyleSheet, Text } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppPicker from '../components/AppPicker'
import AppTextInput from '../components/AppTextInput'

export default function App() {
  const handlePress = useCallback((e: GestureResponderEvent) => {
    console.log('111')
  }, [])

  return (
    <AppSafeAreaView>
      <AppPicker
        style={styles.formItem}
        iconName="apps"
        placeholder="Category"
        onPress={handlePress}
      />
      <AppTextInput
        style={styles.formItem}
        iconName="email"
        placeholder="Email"
      />
      <Text style={styles.formItem}>picker</Text>
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  formItem: {
    margin: 20
  }
})
