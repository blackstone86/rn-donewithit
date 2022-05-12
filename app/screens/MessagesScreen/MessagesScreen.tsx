import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import {
  Animated,
  GestureResponderEvent,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import {
  AppFlatList,
  AppListItem,
  AppListItemDeleteAction
} from '../../components/lists'
import produce from 'immer'
import { MOSH } from '../../config/images'

type Message = {
  id: number
  title: string
  description: string
  image: ImageSourcePropType
}

const messages: Message[] = [
  {
    id: 1,
    title: 'Mosh Hamedani',
    description: 'Hey! Is this item still available?',
    image: MOSH
  },
  {
    id: 2,
    title: 'Mosh Hamedani',
    description:
      "I'm intrested in this item. When will you be able to post it?",
    image: MOSH
  }
]

const styles = StyleSheet.create({
  item: {
    padding: 20
  }
})

export default function MessagesScreen() {
  let [msgs, setMsgs] = useState<Message[]>(messages)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const handlePress = useCallback(
    (e?: GestureResponderEvent, data?: Message) => {},
    []
  )
  const handleDelete = useCallback((id: number) => {
    const deletedMsgs: Message[] = produce(msgs, (draft) => {
      const index = draft.findIndex((msg: Message) => msg.id === id)
      if (index !== -1) draft.splice(index, 1)
    })
    msgs = deletedMsgs // 解决获取 msgs 参数不准问题
    setMsgs(deletedMsgs)
  }, [])
  const handleRenderRightActions = useCallback(
    (
      progress: Animated.AnimatedInterpolation,
      dragX: Animated.AnimatedInterpolation,
      item: Message
    ): ReactNode => {
      return (
        <AppListItemDeleteAction
          onDelete={() => {
            handleDelete(item.id)
          }}
        />
      )
    },
    []
  )
  const handleRefresh = useCallback(() => {
    const updatedMsgs = [
      {
        id: 3,
        title: 'Mosh Hamedani',
        description:
          'My friend is intrested in this item. When will you be able to post it?',
        image: MOSH
      }
    ]
    msgs = updatedMsgs
    setMsgs(msgs)
  }, [])

  return (
    <AppSafeAreaView>
      <AppFlatList
        data={msgs}
        keyExtractor={(msg) => msg.id.toString()}
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
              renderRightActions={(
                progress: Animated.AnimatedInterpolation,
                dragX: Animated.AnimatedInterpolation
              ) => {
                return handleRenderRightActions(progress, dragX, item)
              }}
            />
          )
        }}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </AppSafeAreaView>
  )
}
