import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppForm, Field } from '../../components/forms'
import Yup from '../../utils/yup'
const fields: Field[] = [
  {
    name: 'name',
    type: 'textInput',
    defaultValue: '',
    fieldProps: {
      iconName: 'account',
      placeholder: 'Name',
      keyboardType: 'default',
      textContentType: 'name'
    }
  },
  {
    name: 'email',
    type: 'textInput',
    defaultValue: '',
    fieldProps: {
      iconName: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      textContentType: 'emailAddress'
    }
  },
  {
    name: 'password',
    type: 'textInput',
    defaultValue: '',
    fieldProps: {
      iconName: 'lock',
      placeholder: 'Password',
      keyboardType: 'default',
      textContentType: 'password',
      secureTextEntry: true
    }
  },
  {
    type: 'submit',
    fieldProps: {
      title: 'register'
    }
  }
]
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password')
})
export default function RegisterScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <AppForm
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
        style={styles.form}
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
  form: {
    marginTop: 30
  }
})
