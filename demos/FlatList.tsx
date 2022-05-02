import { FlatList } from 'react-native'

import React from 'react'
import AppListItem from '../components/AppListItem'

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

export default function App() {
  return (
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
  )
}
