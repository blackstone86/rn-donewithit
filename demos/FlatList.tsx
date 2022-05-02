import { FlatList, SafeAreaView, StyleSheet, Platform } from 'react-native'

import React from 'react'
import AppListItem from '../components/AppListItem'
import Constants from 'expo-constants'

/**
 * Constants.statusBarHeight
 * sdk_gphone64_x86_64: 24
 * M2102K1C: 39
 */

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/materials/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/materials/mosh.jpg')
  }
]

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index, separators }) => {
          const { title, description, image } = item
          return (
            <AppListItem title={title} subTitle={description} image={image} />
          )
        }}
      ></FlatList>
    </SafeAreaView>
  )
}
