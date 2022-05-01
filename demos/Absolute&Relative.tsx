import { View } from 'react-native'
import React from 'react'

export default function App() {
  /**
   * position
   * 1.default relative
   * 2.absolute detach doc flow, but does not change the z-index
   */
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // default: column
        justifyContent: 'center', // main axis
        alignItems: 'center' // secondary axis , control items within each line.
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 100
          }}
        />
        <View
          style={{
            backgroundColor: 'gold',
            width: 100,
            height: 100,
            top: 20,
            left: 20,
            position: 'absolute'
          }}
        />
        <View
          style={{
            backgroundColor: 'tomato',
            width: 100,
            height: 100
          }}
        />
      </View>
    </View>
  )
}
