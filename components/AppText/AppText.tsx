import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

function AppText(props: any) {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  )
}

export default AppText
