import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/*
        ios:
        Shadow Props :
        ios only: shadowOffset | shadowOpacity | shadowRadius
        ios and android: shadowColor
      */}
      <View style={{
        shadowColor: 'grey',
        shadowOpacity: 1,
        shadowOffset: { width: 10, height: 10},
        shadowRadius: 10,

        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }}></View>
      {/*
        android
        View Style Props:
        android only: elevation
      */}
      <View style={{
        shadowColor: 'yellow',
        elevation: 20,

        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        marginTop: 10,
      }}></View>
    </SafeAreaView>
  )
}
