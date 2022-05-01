import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

function AppText(props: any) {
  return (
    <Text {...props} style={styles.text}>
      {props.children}
    </Text>
  )
}

export default AppText
