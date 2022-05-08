import React from 'react'
import AppText from '../../AppText'
import styles from './styles'

function AppErrorMessage({ style, errorMessage, ...otherProps }: any) {
  return (
    <AppText style={[styles.text, style]} {...otherProps}>
      {errorMessage}
    </AppText>
  )
}

export default AppErrorMessage
