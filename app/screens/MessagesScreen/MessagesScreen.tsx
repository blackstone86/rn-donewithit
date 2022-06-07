import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
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
import { JIM } from '../../config/images'
import useApi from '../../hooks/useApi'
import { messagesApi } from '../../api'

type Message = {
  id: number
  title: string
  description: string
  image: ImageSourcePropType
}

const styles = StyleSheet.create({
  item: {
    padding: 20
  }
})

function MessagesScreen() {
  const setStaticData = useCallback((data: any) => {
    MessagesScreen.prototype.data = data
  }, [])
  const getStaticData = useCallback(() => {
    return MessagesScreen.prototype.data
  }, [])
  const {
    data,
    error,
    loading,
    request: setData
  }: any = useApi(messagesApi.getMessages, (data) => {
    return data.map((message: any) => {
      const {
        content,
        fromUser: { name }
      } = message
      return {
        ...message,
        title: name,
        description: content,
        image: JIM
      }
    })
  })
  const [msgs, setMsgs] = useState<Message[]>([])
  useEffect(() => {
    setData()
  }, [])
  useEffect(() => {
    setStaticData(data)
    setMsgs(data)
  }, [data])
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const handlePress = useCallback(
    (e?: GestureResponderEvent, data?: Message) => {},
    []
  )
  const handleDelete = useCallback((id: number) => {
    const data = getStaticData()
    const deletedData = data.filter((msg: Message) => {
      return msg.id !== id
    })
    setStaticData(deletedData)
    setMsgs(deletedData)
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
    setData()
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

MessagesScreen.prototype.data = []

export default MessagesScreen
