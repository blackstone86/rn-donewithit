import {
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  StyleSheet,
} from 'react-native'
import React, { useMemo } from 'react'

// encapsulating styles with component
const AppText = (props: any) => {
  const styles = useMemo(()=>(StyleSheet.create({
    text: {
      fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier', // android: 'Roboto' | ios: 'Courier'
      fontStyle: 'italic',
      fontWeight: 'bold', // bold, normal, '100' ~ '900'
      fontSize: 30,
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

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <AppText numberOfLines={1}>I love React Native. I love React Native. I love React Native.</AppText>
    </SafeAreaView>
  )
}
