import {
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import React from 'react'

/**
 * react native automatically import the right implementation of the current platform.
 */
export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    </SafeAreaView>
  )
}
