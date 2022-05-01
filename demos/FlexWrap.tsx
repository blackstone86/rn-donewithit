import { View } from 'react-native'
import React from 'react'

export default function App() {
  /**
   * flexWrap available values
   * nowrap
   * wrap
   * wrap-reverse
   */
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // default: column
        justifyContent: 'center', // main axis
        alignItems: 'center', // secondary axis , control items within each line.
        alignContent: 'center', // secondary axis, alignment of the entire content
        flexWrap: 'wrap'
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 300
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'grey',
          width: 100,
          height: 100
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 100
        }}
      />
    </View>
  )
}
