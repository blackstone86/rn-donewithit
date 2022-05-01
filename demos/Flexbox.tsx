import { StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'

export default function App() {
  // const styles = useMemo(() => StyleSheet.create({
  //   container: {
  //     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  //     backgroundColor: '#fff',
  //     flex: 1,
  //   }
  // }), [])

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 2
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1
        }}
      />
    </View>
  )
}
