import { StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../config/colors'
import AppSafeAreaView from '../components/AppSafeAreaView'
import Yup from '../utils/yup'
import { AppFormFieldProps as Field } from '../components/AppFormField/types'
import AppForm from '../components/AppForm'
const logoImage = require('../assets/materials/logo-red.png')
const CONSTS = {
  PADDING: 10,
  ERROR_HEIGHT: 30,
  LOGO_SIZE: 100,
  LOGO_MARGIN_TOP: 120
}
const fields: Field[] = [
  {
    name: 'email',
    type: 'textInput',
    fieldProps: {
      iconName: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      textContentType: 'emailAddress' // ios only
    }
  },
  {
    name: 'password',
    type: 'textInput',
    fieldProps: {
      iconName: 'lock',
      placeholder: 'Password',
      keyboardType: 'default',
      textContentType: 'password', // ios only
      secureTextEntry: true,
      maxLength: 10
    }
  },
  {
    type: 'submit',
    fieldProps: {
      title: 'login'
    }
  }
]
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password')
})
export default function App() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <AppForm fields={fields} validationSchema={validationSchema} />
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
  }
})
