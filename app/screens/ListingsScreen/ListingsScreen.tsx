import { GestureResponderEvent, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppFlatList as List, AppCard as Card } from '../../components/lists'
import { cardType } from './types'
import { listingsApi } from '../../api'
import styles from './styles'
import ScreenType from '../../navigators/screenTypes'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import useApi from '../../hooks/useApi'
import AppRetryView from '../../components/AppRetryView'

export default function ListingsScreen({ navigation }: any) {
  const {
    data: cards,
    error,
    loading,
    request: setData
  } = useApi(listingsApi.getListings, (data) => {
    return data.map((item: any) => {
      return {
        ...item,
        subTitle: `$${item.price}`,
        imageUrl: item.images[0]?.url
      }
    })
  })
  useEffect(() => {
    setData()
  }, [])
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
