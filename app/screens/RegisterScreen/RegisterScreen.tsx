import React from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import {
  AppErrorMessage,
  AppForm,
  Field,
  TypeKind
} from '../../components/forms'
import Yup from '../../utils/yup'
import styles from './styles'
import useApi from '../../hooks/useApi'
import { usersApi, authApi } from '../../api'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import useAuth from '../../hooks/useAuth'

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
  const registApi = useApi(usersApi.regist)
  const loginApi = useApi(authApi.login)
  const Auth = useAuth()
  const loading = registApi.loading || loginApi.loading
  const error = registApi.data?.error || loginApi.data?.error

  const handleSubmit = async (values: any) => {
    const registResponse = await registApi.request(values)
    if (!registResponse.ok) return

    const user = registResponse.data
    const loginResponse = await loginApi.request({
      email: user.email,
      password: user.password
    })
    if (!loginResponse.ok) return

    const token = loginResponse.data
    Auth.login(token)
  }

  return (
    <AppSafeAreaView style={styles.container}>
      {loading && <AppActivityIndicator visible loop />}
      <AppErrorMessage errorMessage={error} />
      <AppForm
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values) // 避免执行AppForm的回调，因为成功登录后组件销毁，此时执行AppForm回调清除表单数据，浪费资源且无意义
        }}
      />
    </AppSafeAreaView>
  )
}
