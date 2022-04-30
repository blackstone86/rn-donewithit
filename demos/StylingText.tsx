import {
  Text,
  View
} from 'react-native'
import React from 'react'

/**
 *
 * @returns
 */
export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center', // main axis
      alignItems: 'center', // secondary axis , control items within each line.
    }}>
      <Text style={{
        fontSize: 30,
      }}>I love React Native.</Text>
    </View>
  )
}
