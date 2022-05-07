import React from 'react'
import { StyleSheet, Text } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppPicker from '../components/AppPicker'
import AppTextInput from '../components/AppTextInput'

export default function App() {
  return (
    <AppSafeAreaView>
      <AppPicker
        style={styles.formItem}
        iconName="apps"
        placeholder="Category"
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
