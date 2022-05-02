import React from 'react'
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppText from '../AppText'

type AppCardProps = {
  title: string
  subTitle?: string
  image: ImageSourcePropType
}

function AppCard({ title, subTitle, image }: AppCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoBox}>
        <AppText style={[styles.text, styles.title]}>{title}</AppText>
        {subTitle && (
          <AppText style={[styles.text, styles.subTitle]}>{subTitle}</AppText>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: CONSTS.CONTAINER_BORDER_RADIUS,
    overflow: 'hidden'
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
    fontSize: CONSTS.FONT_SIZE,
    lineHeight: CONSTS.LINE_HEIGHT
  },
  title: {
    color: COLORS.BLACK
  },
  subTitle: {
    color: COLORS.SECONDARY
  }
})

export default AppCard
