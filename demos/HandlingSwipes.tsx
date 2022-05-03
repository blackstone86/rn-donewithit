import React, { ReactNode } from 'react'
import {
  Animated,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'
import AppListItem from '../components/AppListItem'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppFlatList from '../components/AppFlatList'
import AppListItemDeleteAction from '../components/AppListItemDeleteAction'

type Message = {
  id: number
  title: string
  description: string
  image: ImageSourcePropType
}

const messages: Message[] = [
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

const handlePress = (e?: GestureResponderEvent, data?: Message) => {}

// const handleRenderRightActions = (
//   progressAnimatedValue: Animated.AnimatedInterpolation,
//   dragAnimatedValue: Animated.AnimatedInterpolation
// ): ReactNode => {
//   return <AppListItemDeleteAction />
// }

export default function App() {
  return (
    <AppSafeAreaView>
      <AppFlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index, separators }) => {
          const { title, description, image }: Message = item
          return (
            <AppListItem
              style={styles.item}
              title={title}
              subTitle={description}
              image={image}
              onPress={(e) => {
                handlePress(e, item)
              }}
              renderRightActions={AppListItemDeleteAction}
            />
          )
        }}
      />
    </AppSafeAreaView>
  )
}
