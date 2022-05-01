import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native'
import React, { useMemo } from 'react'
import { useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  /**
    Object {
      "landscape": false,
      "portrait": true,
    }
   */
  const { portrait, landscape } = useDeviceOrientation()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column'
        }
      }),
    []
  )

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: landscape ? '100%' : '30%'
        }}
      />
    </SafeAreaView>
  )
}
