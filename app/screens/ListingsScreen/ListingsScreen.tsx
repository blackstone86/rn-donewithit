import { ActivityIndicator, GestureResponderEvent, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppFlatList as List, AppCard as Card } from '../../components/lists'
import { cardType } from './types'
import api from '../../api/listings'
import styles from './styles'
import ScreenType from '../../navigators/screenTypes'
import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'
import COLORS from '../../config/colors'

export default function ListingsScreen({ navigation }: any) {
  const [cards, setCards] = useState<any[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const setData = async () => {
    setLoading(true)
    const res: any = await api.getListings()
    setLoading(false)

    // NETWORK_ERROR 中断后台服务
    if (!res.ok) return setError(true)

    setError(false)
    const cards = res.data.map((item: any) => {
      return {
        ...item,
        subTitle: `$${item.price}`,
        imageUrl: item.images[0].url
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
      {loading && (
        <View style={styles.infoBox}>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
      )}
      {error && (
        <View style={styles.infoBox}>
          <AppText style={styles.text}>Couldn't retrieve the listings</AppText>
          <AppButton
            style={styles.retryButton}
            title="Retry"
            onPress={setData}
          />
        </View>
      )}
      {!loading && !error && (
        <List
          data={cards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { title, subTitle, imageUrl }: cardType = item
            return (
              <Card
                style={styles.card}
                title={title}
                subTitle={subTitle}
                imageUrl={imageUrl}
                onPress={(e?: GestureResponderEvent) => {
                  handlePress(item)
                }}
              />
            )
          }}
        />
      )}
    </AppSafeAreaView>
  )
}
