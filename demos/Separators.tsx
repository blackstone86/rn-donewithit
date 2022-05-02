import React from 'react'
import AppListItem from '../components/AppListItem'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppFlatList from '../components/AppFlatList'

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
    <AppSafeAreaView>
      <AppFlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index, separators }) => {
          const { title, description, image } = item
          return (
            <AppListItem title={title} subTitle={description} image={image} />
          )
        }}
      />
    </AppSafeAreaView>
  )
}
