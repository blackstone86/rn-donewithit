import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

function AppText({ style, children, ...otherProps }: any) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  )
}

export default AppText
