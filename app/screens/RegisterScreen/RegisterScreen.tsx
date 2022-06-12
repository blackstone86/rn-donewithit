import React from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppForm, Field, TypeKind } from '../../components/forms'
import Yup from '../../utils/yup'
import styles from './styles'
import ScreenType from '../../navigators/screenTypes'
import useApi from '../../hooks/useApi'
import { usersApi } from '../../api'
import AppActivityIndicator from '../../components/AppActivityIndicator'

const fields: Field[] = [
  {
    name: 'name',
    type: TypeKind.TEXT_INPUT,
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
    type: TypeKind.TEXT_INPUT,
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
    type: TypeKind.TEXT_INPUT,
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
    type: TypeKind.SUBMIT,
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
export default function RegisterScreen({ navigation }: any) {
  const { error, loading, requestWithCb: regist } = useApi(usersApi.addUser)
  return (
    <AppSafeAreaView style={styles.container}>
      {loading && <AppActivityIndicator visible loop />}
      <AppForm
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const res: any = await regist(values)
          if (res.ok) {
            navigation.navigate(ScreenType.LOGIN as never)
          }
        }}
        style={styles.form}
      />
    </AppSafeAreaView>
  )
}
