import { SafeAreaView, StatusBar, Platform } from 'react-native'
import React, { useMemo } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/**
 * priority: style.fontSize > attribute.size
 */
export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <MaterialCommunityIcons name="email" size={280} color="tomato" />
    </SafeAreaView>
  )
}
