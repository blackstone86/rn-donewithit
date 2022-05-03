import React from 'react'
import { GestureResponderEvent, StyleSheet } from 'react-native'
import AppListItem from '../components/AppListItem'
import { AppListItemData } from '../components/AppListItem/types'
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

const styles = StyleSheet.create({
  item: {
    padding: 20
  }
})

const handlePress = (e?: GestureResponderEvent, data?: AppListItemData) => {
  console.log(data)
}

export default function App() {
  return (
    <AppSafeAreaView>
      <AppFlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index, separators }) => {
          const { title, description, image } = item
          return (
            <AppListItem
              style={styles.item}
              title={title}
              subTitle={description}
              image={image}
              onPress={handlePress}
            />
          )
        }}
      />
    </AppSafeAreaView>
  )
}
