import React, { useCallback } from 'react'
import {
  View,
  Image,
  GestureResponderEvent,
  TouchableHighlight
} from 'react-native'
import FastImage from 'react-native-fast-image'
import COLORS from '../../../config/colors'
import CONSTS from './consts'
import AppText from '../../AppText'
import { AppCardProps } from './types'
import styles from './styles'

function AppCard({
  title,
  subTitle,
  image,
  imageUrl,
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
        {/* <Image style={styles.image} source={{ uri: imageUrl } || image} /> */}
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            priority: FastImage.priority.normal
          }}
        />
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

export default AppCard
