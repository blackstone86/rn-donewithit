import React, { useCallback } from 'react'
import {
  View,
  Image,
  GestureResponderEvent,
  TouchableHighlight,
  Animated
} from 'react-native'
import AppText from '../../AppText'
import COLORS from '../../../config/colors'
import styles from './styles'
import { AppListItemProps } from './types'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import AppIcon from '../../AppIcon'
import CONSTS from './consts'
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
            <View style={styles.infoBox}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={[styles.title, styles.subTitle]}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <AppIcon
              name="chevron-right"
              size={CONSTS.ICON_SIZE}
              color={COLORS.GRAY}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

export default AppListItem
