import { StyleSheet, Image, Button } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import AppTextInput from '../../components/AppTextInput'
import AppButton from '../../components/AppButton'
const logoImage = require('../../assets/materials/logo-red.png')

export default function App() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <AppTextInput
        style={styles.formItem}
        iconName="email"
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress" // ios only
        onChangeText={(text: string) => {
          setEmail(text)
        }}
      />
      <AppTextInput
        style={styles.formItem}
        iconName="lock"
        placeholder="Password"
        keyboardType="default"
        textContentType="password" // ios only
        secureTextEntry
        onChangeText={(text: string) => {
          setPassword(text)
        }}
      />
      <AppButton
        style={styles.loginButton}
        title="login"
        onPress={() => {
          console.log(email, password)
        }}
      />
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: CONSTS.PADDING
  },
  logo: {
    marginTop: 80,
    marginBottom: CONSTS.MARGIN * 2,
    width: CONSTS.LOGO_SIZE,
    height: CONSTS.LOGO_SIZE
  },
  formItem: {
    marginBottom: CONSTS.MARGIN
  },
  loginButton: {
    width: '100%'
  }
})
