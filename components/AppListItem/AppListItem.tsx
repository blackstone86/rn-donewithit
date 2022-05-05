import React, { useCallback } from 'react'
import {
  View,
  Image,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
  Animated
} from 'react-native'
import AppText from '../AppText'
import CONSTS from './consts'
import COLORS from '../../config/colors'
import { AppListItemProps } from './types'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
function AppListItem(props: AppListItemProps) {
  const { title, subTitle, image, style, onPress, renderRightActions } = props

  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])

  const handleRenderRightActions = useCallback(
    (
      progressAnimatedValue: Animated.AnimatedInterpolation,
      dragAnimatedValue: Animated.AnimatedInterpolation
    ) => {
      if (typeof renderRightActions === 'function') {
        return renderRightActions(progressAnimatedValue, dragAnimatedValue)
      }
    },
    []
  )

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={handleRenderRightActions}>
        <TouchableHighlight
          underlayColor={COLORS.LIGHT_GRAY}
          activeOpacity={0.85}
          onPress={(e?: GestureResponderEvent) => {
            handlePress(e)
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
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
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
