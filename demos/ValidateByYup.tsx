import { StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../config/colors'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
const logoImage = require('../assets/materials/logo-red.png')

const CONSTS = {
  PADDING: 10,
  ERROR_HEIGHT: 30,
  LOGO_SIZE: 100,
  LOGO_MARGIN_TOP: 120
}

const ValidateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required')
})

export default function App() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={ValidateSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              iconName="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress" // ios only
              onChangeText={handleChange('email')}
            />
            <AppText style={styles.error}>{errors.email}</AppText>
            <AppTextInput
              iconName="lock"
              placeholder="Password"
              keyboardType="default"
              textContentType="password" // ios only
              secureTextEntry
              maxLength={10}
              onChangeText={handleChange('password')}
            />
            <AppText style={styles.error}>{errors.password}</AppText>
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
    marginTop: CONSTS.LOGO_MARGIN_TOP,
    marginBottom: CONSTS.LOGO_MARGIN_TOP / 2,
    width: CONSTS.LOGO_SIZE,
    height: CONSTS.LOGO_SIZE
  },
  loginButton: {
    width: '100%'
  },
  error: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    height: CONSTS.ERROR_HEIGHT,
    lineHeight: CONSTS.ERROR_HEIGHT,
    width: '100%'
  }
})
