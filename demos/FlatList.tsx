import { FlatList } from 'react-native'

import React from 'react'
import { AppListItem } from '../components/lists'
import AppSafeAreaView from '../components/AppSafeAreaView'
import { MOSH } from '../config/images'
const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: MOSH
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: MOSH
  }
]

export default function App() {
  return (
    <AppSafeAreaView>
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
    </AppSafeAreaView>
  )
}
