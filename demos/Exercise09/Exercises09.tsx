import { StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import AppFlatList from '../../components/AppFlatList'
import { cardType } from './types'
import AppCard from '../../components/AppCard'
const jacketImage = require('../../assets/materials/jacket.jpg')
const couchImage = require('../../assets/materials/couch.jpg')

export default function App() {
  const { cards } = useMemo(
    () => ({
      cards: [
        {
          title: 'Red jacket for sale',
          subTitle: '$100',
          image: jacketImage
        },
        {
          title: 'Couch in great condition',
          subTitle: '$1000',
          image: couchImage
        }
      ]
    }),
    []
  )
  // const handlePress = useCallback((item: menuType) => {
  //   console.log(item)
  // }, [])
  return (
    <AppSafeAreaView style={styles.container}>
      <AppFlatList
        data={cards}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          const { title, subTitle, image }: cardType = item
          return (
            <AppCard
              style={styles.card}
              title={title}
              subTitle={subTitle}
              image={image}
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
