import { View } from 'react-native'
import React from 'react'

export default function App() {
  /**
   * padding
   * 1.paddingHorizontal: set paddingLeft and paddingRight = x
   * 2.paddingVertical: set paddingTop and paddingBottom = y
   * 3-1.priority: paddingLeft,paddingRight > paddingHorizontal > padding
   * 3-2.priority: paddingTop,paddingBottom > paddingVertical > padding
   */
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column', // default: column
        justifyContent: 'center', // main axis
        alignItems: 'center' // secondary axis , control items within each line.
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 200,
          height: 200,

          padding: 20,

          paddingHorizontal: 20,
          paddingLeft: 20,
          paddingRight: 20,

          paddingVertical: 20,
          paddingTop: 20,
          paddingBottom: 20
        }}
      >
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1
          }}
        />
      </View>

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'tomato',
          margin: 20
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'dodgerblue',
            margin: 30,

            marginHorizontal: 30,
            marginLeft: 30,
            marginRight: 30,

            marginVertical: 30,
            marginTop: 30,
            marginBottom: 30
          }}
        ></View>
      </View>
    </View>
  )
}
