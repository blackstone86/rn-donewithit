import React from 'react'
import AppText from '../AppText'
import styles from './style'

function AppNoticeText({ style, children, ...otherProps }: any) {
  return (
    <AppText style={[styles.text, style]} {...otherProps}>
      {children}
    </AppText>
  )
}

export default AppNoticeText
