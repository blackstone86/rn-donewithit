import React, { useCallback, useMemo } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native'
import AppText from '../AppText'
import CONSTS from './consts'
import COLORS from '../../config/colors'
import { AppListItemProps, AppListItemData } from './types'

function AppListItem(props: AppListItemProps) {
  const { title, subTitle, image, style, onPress } = props

  const handlePress = useCallback(
    (e: GestureResponderEvent, data: AppListItemData) => {
      typeof onPress === 'function' && onPress(e, data)
    },
    []
  )

  const data: AppListItemData = useMemo(
    () => ({
      title,
      subTitle,
      image
    }),
    []
  )

  return (
    <TouchableOpacity
      onPress={(e: GestureResponderEvent) => {
        handlePress(e, data)
      }}
    >
      <View style={[style, styles.listItem]}>
        <Image style={styles.avatar} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && (
            <AppText style={[styles.title, styles.subTitle]}>
              {subTitle}
            </AppText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  avatar: {
    width: CONSTS.AVATAR_SIZE,
    height: CONSTS.AVATAR_SIZE,
    borderRadius: CONSTS.AVATAR_SIZE / 2,
    marginRight: CONSTS.MARGIN_RIGHT
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
