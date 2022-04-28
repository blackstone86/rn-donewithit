import {
  View
} from 'react-native'
import React from 'react'

export default function App() {

  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      /**
       * flexDirection: column - portrait
       * main axis: y
       * secondary axis: x
       * flexDirection: row - horizontal
       * main axis: x
       * secondary axis: y
       *
       * x axis align
       * left: flex-start default
       * center: center
       * right: flex-end
       *
       * y axis align
       * top: flex-start default
       * center: center
       * bottom: flex-end
       *
       * justifyContent availabale values
       * flex-start
       * center
       * flex-end
       * space-between
       * space-around
       * space-evenly
       *
       * alignItems available values
       * baseline
       * flex-start
       * center
       * flex-end
       * stretch
       *
       * alignSelf available values
       * flex-start
       * baseline
       * flex-end
       * center
       * stretch
       * auto
       */
      flexDirection: 'row', // default: column
      justifyContent: 'center', // main axis
      alignItems: 'center', // secondary axis
      alignSelf: 'center'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 200,
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }} />
    </View>
  )
}
