import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import COLORS from '../../config/colors'
import AppCard from '../../components/AppCard'

const PADDING = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: PADDING,
    paddingTop: 100,
  },
})

const cardImage = require('../../assets/materials/jacket.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <AppCard
        title='Red jacket for sale!'
        subTitle='$100'
        image={cardImage}
      />
    </View>
  )
}
