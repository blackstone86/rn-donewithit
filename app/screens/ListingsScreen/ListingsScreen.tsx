import { GestureResponderEvent, StyleSheet } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppFlatList as List, AppCard as Card } from '../../components/lists'
import { cardType } from './types'
import { JACKET, COUCH } from '../../config/images'
import { LONG_TEXT } from '../../config/texts'
import styles from './styles'
import ScreenType from '../../navigators/screenTypes'

export default function ListingsScreen({ navigation }: any) {
  const { cards } = useMemo(
    () => ({
      cards: [
        {
          id: 1,
          title: LONG_TEXT,
          subTitle: '$180',
          image: JACKET
        },
        {
          id: 2,
          title: 'Couch in great condition',
          subTitle: '$1000',
          image: COUCH
        }
      ]
    }),
    []
  )
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
