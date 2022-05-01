import React, { useMemo } from 'react'
import { Text, StyleSheet } from 'react-native'

const AppText = (props: any) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontSize: 20,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
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
