import React, { useCallback, useMemo, useState } from 'react'
import { KeyboardTypeOptions, StyleSheet } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import AppText from '../components/AppText'

type dataType = {
  iconName: string
  placeholder: string
  keyboardType: KeyboardTypeOptions
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
  const { placeholder, keyboardType, iconName }: dataType = useMemo(
    () => ({
      placeholder: 'First Name',
      keyboardType: 'numeric',
      iconName: 'email'
    }),
    []
  )
  const styles = useMemo(
    () =>
      StyleSheet.create({
        appInput: {
          margin: 20
        },
        appTextInput: {
          fontSize: 18
        },
        text: {
          margin: 20
        }
      }),
    []
  )

  return (
    <AppSafeAreaView>
      <AppTextInput
        style={styles.appInput}
        textInputStyle={styles.appTextInput}
        value={email}
        iconName={iconName}
        keyboardType={keyboardType} // default 'default'
        placeholder={placeholder}
        maxLength={20} // default 50
        onChangeText={handleChangeText}
        // secureTextEntry
      />
      <AppText style={styles.text}>{email}</AppText>
    </AppSafeAreaView>
  )
}
