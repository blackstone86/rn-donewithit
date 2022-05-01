import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native'
import React, { useMemo } from 'react'
import { useDimensions } from '@react-native-community/hooks'

/**
 * Density-indepent Pixels
 * Physical Pixels = DIPs x Scale Factor
 *
 * Model            4,4s     ----> IPhone
 * Points           320x480  ----> 逻辑分辨率
 * Scale Factor     2x       ----> 放大因子，通常说的多少倍屏
 * Pixels           640x960  ----> 实际分辨率
 * View Width       150x2    ----> 150逻辑像素转成设备所需的像素
 *
 * Model            11 Pro Max ----> IPhone
 * Points           414x896    ----> 逻辑分辨率
 * Scale Factor     3x         ----> 放大因子，通常说的多少倍屏
 * Pixels           1242x2688  ----> 实际分辨率
 * View Width       150x3      ----> 150逻辑像素转成设备所需的像素
 */

export default function App() {
  // portrait mode or landscape mode will return updated dimensions
  // Useful for when you need support multiple orientations
  // window size is little smaller than screen size
  const screen = useDimensions().screen
  console.log(screen)
  /**
    xiaomi 11 Ultras
    Object {
      "fontScale": 1,
      "height": 914.2857142857143,
      "scale": 3.5,
      "width": 411.42857142857144,
    }
   */
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          backgroundColor: '#fff',
          flex: 1
        }
      }),
    []
  )

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 393, // 这里是指Dip(Density-indepent Pixels)，可以理解为逻辑像素
          height: '30%'
        }}
      />
    </SafeAreaView>
  )
}
