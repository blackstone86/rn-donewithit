import { StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../config/colors'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import { LOGO_RED } from '../config/images'

const CONSTS = {
  PADDING: 10,
  MARGIN: 20,
  LOGO_SIZE: 100
}

export default function App() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={LOGO_RED} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              style={styles.formItem}
              iconName="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress" // ios only
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              style={styles.formItem}
              iconName="lock"
              placeholder="Password"
              keyboardType="default"
              textContentType="password" // ios only
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <AppButton
              style={styles.loginButton}
              title="login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
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
