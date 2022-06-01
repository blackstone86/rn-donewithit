import { GestureResponderEvent } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppFlatList as List, AppCard as Card } from '../../components/lists'
import { cardType } from './types'
import api from '../../api/listings'
import styles from './styles'
import ScreenType from '../../navigators/screenTypes'

export default function ListingsScreen({ navigation }: any) {
  const [cards, setCards] = useState([])
  const setData = async () => {
    const res: any = await api.getListings()
    const cards = res.data.map((item: any) => {
      return {
        ...item,
        subTitle: `$${item.price}`,
        image: {
          uri: item.images[0].url
        }
      }
    })
    setCards(cards)
  }
  useEffect(() => {
    setData()
  }, [])
  const handlePress = useCallback((item: cardType) => {
    const params = item
    navigation.navigate(ScreenType.LISTING_DETAILS as never, params as never)
  }, [])
  return (
    <AppSafeAreaView style={styles.container}>
      <List
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const { title, subTitle, image }: cardType = item
          return (
            <Card
              style={styles.card}
              title={title}
              subTitle={subTitle}
              image={image}
              onPress={(e?: GestureResponderEvent) => {
                handlePress(item)
              }}
            />
          )
        }}
      />
    </AppSafeAreaView>
  )
}
