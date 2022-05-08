import { GestureResponderEvent, StyleSheet } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppFlatList as List, AppCard as Card } from '../../components/lists'
import { cardType } from './types'
import { JACKET, COUCH } from '../../config/images'
import { LONG_TEXT } from '../../config/texts'

export default function App() {
  const { cards } = useMemo(
    () => ({
      cards: [
        {
          title: LONG_TEXT,
          subTitle: LONG_TEXT,
          image: JACKET
        },
        {
          title: 'Couch in great condition',
          subTitle: '$1000',
          image: COUCH
        }
      ]
    }),
    []
  )
  const handlePress = useCallback((item: cardType) => {
    console.log(item)
  }, [])
  return (
    <AppSafeAreaView style={styles.container}>
      <List
        data={cards}
        keyExtractor={(item) => item.title}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingBottom: CONSTS.PADDING
  },
  card: {
    marginHorizontal: CONSTS.PADDING,
    marginTop: CONSTS.PADDING
  }
})