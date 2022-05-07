import { StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../config/colors'
import AppSafeAreaView from '../components/AppSafeAreaView'
import Yup from '../utils/yup'
import { Field } from '../components/forms/AppFormField/types'
import AppForm from '../components/forms/AppForm'
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
    defaultValue: 'asianking86@qq.com',
    fieldProps: {
      iconName: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      textContentType: 'emailAddress' // ios only
    }
  },
  {
    name: 'name',
    type: 'textInput',
    defaultValue: 'Junwen Huang',
    fieldProps: {
      iconName: 'account',
      placeholder: 'Name',
      keyboardType: 'name-phone-pad',
      textContentType: 'name' // ios only
    }
  },
  {
    name: 'password',
    type: 'textInput',
    defaultValue: '12345678',
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
  name: Yup.string().required().label('Name'),
  password: Yup.string().required().min(8).label('Password')
})
export default function App() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <AppForm
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
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
    marginTop: CONSTS.LOGO_MARGIN_TOP,
    marginBottom: CONSTS.LOGO_MARGIN_TOP / 2,
    width: CONSTS.LOGO_SIZE,
    height: CONSTS.LOGO_SIZE
  }
})
