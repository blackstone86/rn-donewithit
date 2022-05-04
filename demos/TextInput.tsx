import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import COLORS from '../config/colors'

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.PRIMARY
  }
})

/**
 * only ios:
 * clearButtonMode
 */
export default function App() {
  const [firstName, setFirstName] = useState('')
  return (
    <AppSafeAreaView>
      <TextInput
        style={styles.textInput}
        secureTextEntry // secureTextEntry={true}
        placeholder="First Name"
        clearButtonMode="always"
        maxLength={10}
        keyboardType={'numeric'}
        value={firstName}
        onChangeText={(text) => {
          setFirstName(text)
        }}
      />
      <Text>{firstName}</Text>
    </AppSafeAreaView>
  )
}
