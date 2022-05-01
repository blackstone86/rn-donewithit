import React, { useMemo } from 'react'
import { Text, StyleSheet } from 'react-native'

const AppText = (props: any) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontSize: 18,
          fontFamily: 'Courier',
          fontWeight: '100',
          // =====================
          fontStyle: 'italic',
          color: 'tomato',
          textTransform: 'capitalize',
          textDecorationLine: 'underline',
          textAlign: 'center',
          lineHeight: 36
        }
      }),
    []
  )

  return (
    <Text {...props} style={styles.text}>
      {props.children}
    </Text>
  )
}

export default AppText
