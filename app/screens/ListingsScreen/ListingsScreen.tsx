import { GestureResponderEvent } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppFlatList as List, AppCard as Card } from '../../components/lists'
import { cardType } from './types'
import { listingsApi, myApi } from '../../api'
import styles from './styles'
import ScreenType from '../../navigators/screenTypes'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import useApi from '../../hooks/useApi'
import AppRetryView from '../../components/AppRetryView'
import ScreenName from '../../navigators/screenNames'
import { useFocusEffect } from '@react-navigation/native'

export default function ListingsScreen({ navigation, route: { params } }: any) {
  const api = params?.from === ScreenName.ACCOUNT_SCREEN ? myApi : listingsApi
  const {
    data: cards,
    error,
    loading,
    request: setData
  } = useApi(api.getListings, (data) => {
    return data.map((item: any) => {
      const image = item.images[0]
      return {
        ...item,
        subTitle: `$${item.price}`,
        imageUrl: image?.url,
        thumbnailUrl: image?.thumbnailUrl
      }
    })
  })
  useFocusEffect(
    useCallback(() => {
      setData()
    }, [])
  )
  const handlePress = useCallback((item: cardType) => {
    const params = item
    navigation.navigate(ScreenType.LISTING_DETAILS as never, params as never)
  }, [])
  return (
    <AppSafeAreaView style={styles.container}>
      {loading && <AppActivityIndicator visible loop />}
      {error && (
        <AppRetryView
          title="Couldn't retrieve the listings"
          handleRetry={setData}
        />
      )}
      {!loading && !error && (
        <List
          data={cards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { title, subTitle, imageUrl, thumbnailUrl }: cardType = item
            return (
              <Card
                style={styles.card}
                title={title}
                subTitle={subTitle}
                imageUrl={imageUrl}
                thumbnailUrl={thumbnailUrl}
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
