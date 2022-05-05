import React, { useCallback, useMemo, useState } from 'react'
import { KeyboardTypeOptions } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import AppText from '../components/AppText'

type dataType = {
  iconName: string
  placeholder: string
  keyboardType: KeyboardTypeOptions
  secureTextEntry: boolean
}

/**
 * only ios:
 * clearButtonMode
 */
export default function App() {
  const [email, setEmail] = useState('')
  const handleChangeText = useCallback((text: string) => {
    setEmail(text)
  }, [])
  const { placeholder, keyboardType, iconName, secureTextEntry }: dataType =
    useMemo(
      () => ({
        placeholder: 'First Name',
        keyboardType: 'numeric',
        iconName: 'email',
        secureTextEntry: true
      }),
      []
    )
  return (
    <AppSafeAreaView>
      <AppTextInput
        iconName={iconName}
        keyboardType={keyboardType} // default 'default'
        placeholder={placeholder}
        onChangeText={handleChangeText}
        secureTextEntry
        maxLength={20} // default 50
      />
      <AppText>{email}</AppText>
    </AppSafeAreaView>
  )
}
