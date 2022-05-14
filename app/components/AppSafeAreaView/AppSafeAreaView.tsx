import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from './styles'

function AppSafeAreaView({ style, children, ...rest }: any) {
  return (
    <SafeAreaView style={[style, styles.container]} {...rest}>
      {children}
    </SafeAreaView>
  )
}

export default AppSafeAreaView
