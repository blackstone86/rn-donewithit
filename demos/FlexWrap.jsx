import {
  View
} from 'react-native'
import React from 'react'

export default function App() {

  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row', // default: column
      justifyContent: 'center', // main axis
      alignItems: 'center', // secondary axis
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }} />
    </View>
  )
}
