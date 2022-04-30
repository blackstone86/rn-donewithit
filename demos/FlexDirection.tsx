import {
  View
} from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row' // 默认 column
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
