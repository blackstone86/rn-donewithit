import { Image, Text, View, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  image: {
    width: '100%',
    height: CONSTS.IMAGE_HEIGHT
  },
  infoBox: {
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL,
    paddingVertical: CONSTS.PADDING_VERTICAL
  },
  text: {
    lineHeight: CONSTS.LINE_HEIGHT
  },
  title: {
    fontSize: CONSTS.TITLE_FONT_SIZE,
    color: COLORS.BLACK
  },
  subTitle: {
    fontSize: CONSTS.SUBTITLE_FONT_SIZE,
    color: COLORS.SECONDARY
  },
  sellerBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 36,
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL
  },
  avatar: {
    width: CONSTS.AVATAR_SIZE,
    height: CONSTS.AVATAR_SIZE,
    borderRadius: CONSTS.AVATAR_SIZE / 2,
    marginRight: CONSTS.PADDING_HORIZONTAL / 2
  },
  sellerText: {
    fontSize: CONSTS.SUBTITLE_FONT_SIZE
  },
  total: {
    color: COLORS.SILVER,
    lineHeight: CONSTS.TOTAL_LINE_HEIGHT
  }
})

export default function App() {
  const { title, subTitle, image, avatarImage, name, listings } = useMemo(
    () => ({
      title: 'Red jacket for sale',
      subTitle: '$100',
      image: require('../../assets/materials/jacket.jpg'),
      avatarImage: require('../../assets/materials/mosh.jpg'),
      name: 'Mosh Hamedani',
      listings: 5
    }),
    []
  )

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoBox}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        {subTitle && (
          <Text style={[styles.text, styles.subTitle]}>{subTitle}</Text>
        )}
      </View>
      <View style={styles.sellerBox}>
        <Image style={styles.avatar} source={avatarImage} />
        <View>
          <Text style={styles.sellerText}>{name}</Text>
          <Text
            style={[styles.sellerText, styles.total]}
          >{`${listings} Listings`}</Text>
        </View>
      </View>
    </View>
  )
}
