import React from 'react'
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import AppText from '../AppText'
import CONSTS from './consts'
import COLORS from '../../config/colors'

type AppListItemProps = {
  title: string
  subTitle?: string
  image: ImageSourcePropType
}

function AppListItem(props: AppListItemProps) {
  const { title, subTitle, image } = props
  return (
    <View style={styles.listItem}>
      <Image style={styles.avatar} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && (
          <AppText style={[styles.title, styles.subTitle]}>{subTitle}</AppText>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
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
  title: {
    fontSize: CONSTS.SUBTITLE_FONT_SIZE
  },
  subTitle: {
    color: COLORS.GRAY,
    lineHeight: CONSTS.TOTAL_LINE_HEIGHT
  }
})

export default AppListItem
