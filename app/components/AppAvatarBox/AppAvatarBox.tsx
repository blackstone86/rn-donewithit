import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../AppText'
import { AppAvatarBoxProps } from './types'
import CONSTS from './consts'
import COLORS from '../../config/colors'

function AppAvatarBox({ title, image, subTitle, style }: AppAvatarBoxProps) {
  return (
    <View style={[style, styles.container]}>
      <Image style={styles.avatar} source={image} />
      <View style={styles.infoBox}>
        <AppText style={styles.text}>{title}</AppText>
        <AppText style={[styles.text, styles.subTitle]}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL
  },
  avatar: {
    width: CONSTS.AVATAR_SIZE,
    height: CONSTS.AVATAR_SIZE,
    borderRadius: CONSTS.AVATAR_SIZE / 2,
    marginRight: CONSTS.PADDING_HORIZONTAL / 2
  },
  infoBox: {
    flexShrink: 1
  },
  text: {
    fontSize: CONSTS.FONT_SIZE
  },
  subTitle: {
    color: COLORS.GRAY,
    marginTop: CONSTS.SUBTITLE_MARGIN_TOP
  }
})

export default AppAvatarBox
