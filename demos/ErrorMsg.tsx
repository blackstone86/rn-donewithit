import { StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../config/colors'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import Yup from '../utils/yup'
import { AppErrorMessage } from '../components/forms'
import { LOGO_RED } from '../config/images'
const CONSTS = {
  PADDING: 10,
  ERROR_HEIGHT: 30,
  LOGO_SIZE: 100,
  LOGO_MARGIN_TOP: 120
}
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password')
})
export default function App() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={LOGO_RED} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleSubmit, setFieldTouched, errors, touched }) => (
          <>
            <AppTextInput
              iconName="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress" // ios only
              onBlur={() => {
                setFieldTouched('email')
              }}
              onChangeText={handleChange('email')}
            />
            <AppErrorMessage errorMessage={touched.email && errors.email} />
            <AppTextInput
              iconName="lock"
              placeholder="Password"
              keyboardType="default"
              textContentType="password" // ios only
              secureTextEntry
              maxLength={10}
              onBlur={() => {
                setFieldTouched('password')
              }}
              onChangeText={handleChange('password')}
            />
            <AppErrorMessage
              errorMessage={touched.password && errors.password}
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
    marginTop: CONSTS.LOGO_MARGIN_TOP,
    marginBottom: CONSTS.LOGO_MARGIN_TOP / 2,
    width: CONSTS.LOGO_SIZE,
    height: CONSTS.LOGO_SIZE
  },
  loginButton: {
    width: '100%'
  }
})
