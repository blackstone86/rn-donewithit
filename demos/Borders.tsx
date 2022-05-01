import { View, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function App() {
  /**
   * borderLeftColor, borderRightColor 's priority < borderColor
   * borderTopColor, borderBottomColor 's priority > borderColor
   */
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,

          borderWidth: 10,
          borderColor: 'royalblue',
          borderRadius: 10,

          // border width
          borderTopWidth: 5,
          borderRightWidth: 6,
          borderBottomWidth: 7,
          borderLeftWidth: 8,
          // border radius
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          // border color
          borderTopColor: 'tomato',
          borderRightColor: 'yellow',
          borderBottomColor: 'plum',
          borderLeftColor: 'black'
        }}
      ></View>
    </SafeAreaView>
  )
}
