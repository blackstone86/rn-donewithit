import { Alert, Image } from 'react-native'
import React, { useEffect } from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import Yup from '../../utils/yup'
import { AppForm, Field, TypeKind } from '../../components/forms'
import { LOGO_RED } from '../../config/images'
import styles from './styles'
import { authApi } from '../../api'
import useApi from '../../hooks/useApi'
import AppActivityIndicator from '../../components/AppActivityIndicator'

const fields: Field[] = [
  {
    name: 'email',
    type: TypeKind.TEXT_INPUT,
    // defaultValue: 'jimvinhuang@gmail.com',
    fieldProps: {
      iconName: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      textContentType: 'emailAddress' // ios only
    }
  },
  // {
  //   name: 'name',
  //   type: TypeKind.TEXT_INPUT,
  //   defaultValue: 'Junwen Huang',
  //   fieldProps: {
  //     iconName: 'account',
  //     placeholder: 'Name',
  //     keyboardType: 'name-phone-pad',
  //     textContentType: 'name' // ios only
  //   }
  // },
  {
    name: 'password',
    type: TypeKind.TEXT_INPUT,
    // defaultValue: '12345678',
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
    type: TypeKind.SUBMIT,
    fieldProps: {
      title: 'login'
    }
  }
]
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  // name: Yup.string().required().label('Name'),
  password: Yup.string().required().min(8).label('Password')
})
export default function LoginScreen({ navigation }: any) {
  const { loading, requestWithCb: login } = useApi(authApi.login)
  return (
    <AppSafeAreaView style={styles.container}>
      {loading && <AppActivityIndicator visible loop />}
      <Image style={styles.logo} source={LOGO_RED} />
      <AppForm
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          return new Promise<void>((resolve, reject) => {
            login(values).then((res: any) => {
              if (res.ok) {
                resolve()
              } else {
                const errorMessage = res.data.error
                reject(new Error(errorMessage))
                Alert.alert(
                  'Error Message',
                  'Invalid email or password.',
                  [
                    {
                      text: 'Close'
                    }
                  ],
                  {
                    cancelable: true
                  }
                )
              }
            })
          })
        }}
      />
    </AppSafeAreaView>
  )
}
