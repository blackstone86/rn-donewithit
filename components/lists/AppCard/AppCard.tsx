import React, { useCallback } from 'react'
import {
  View,
  Image,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight
} from 'react-native'
import COLORS from '../../../config/colors'
import CONSTS from './consts'
import AppText from '../../AppText'
import { AppCardProps } from './types'

function AppCard({
  title,
  subTitle,
  image,
  style,
  onPress,
  titleMaxLines = CONSTS.TITLE_MAX_LINES,
  subTitleMaxLines = CONSTS.SUBTITLE_MAX_LINES
}: AppCardProps) {
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableHighlight
      underlayColor={COLORS.LIGHT_GRAY}
      activeOpacity={0.85}
      onPress={handlePress}
    >
      <View style={[style, styles.container]}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoBox}>
          <AppText
            style={[styles.text, styles.title]}
            numberOfLines={titleMaxLines}
          >
            {title}
          </AppText>
          {subTitle && (
            <AppText
              style={[styles.text, styles.subTitle]}
              numberOfLines={subTitleMaxLines}
            >
              {subTitle}
            </AppText>
          )}
        </View>
      </View>
    </TouchableHighlight>
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
    lineHeight: CONSTS.LINE_HEIGHT,
    fontWeight: 'bold'
  },
  title: {
    color: COLORS.BLACK
  },
  subTitle: {
    color: COLORS.SECONDARY
  }
})

export default AppCard
