import React, { useMemo } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const AppText = (props: any) => {
  const styles = useMemo(()=>(StyleSheet.create({
    text: {
      // ...Platform.select({
      //   android: {
      //     fontSize: 20,
      //     fontFamily: 'Roboto',
      //     fontWeight: 'bold',
      //   },
      //   ios: {
      //     fontSize: 18,
      //     fontFamily: 'Courier',
      //     fontWeight: '100',
      //   }
      // }),
      // ==============================
      fontStyle: 'italic',
      color: 'tomato',
      textTransform: 'capitalize',
      textDecorationLine: 'underline',
      textAlign: 'center',
      lineHeight: 36,
    }
  })), [])

  return (
    <Text {...props} style={styles.text}>{props.children}</Text>
  );
}

export default AppText
