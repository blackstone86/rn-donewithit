import { View } from 'react-native'
import React from 'react'

export default function App() {
  /**
   * flexBasis
   * 1.set main axis length and priority heigher than width
   *
   * flexGrow (flexGrow:1 === flex:1)
   * 1.it is simular with flex, you need to reload the app to see the result
   *
   * flexShrink (flexShrink:1 === flex: -1, you need to reload the app to see the result)
   * 1.priority, keep other box which has absolute length show
   * 2.secondary, flexShrink boxes's main axis length Proportional in the remain length of the screen.
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
          width: 100,
          flexGrow: 1,
          height: 100
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
    </View>
  )
}
