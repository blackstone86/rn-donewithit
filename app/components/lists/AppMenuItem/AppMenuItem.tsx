import React, { useCallback } from 'react'
import { View, GestureResponderEvent, TouchableHighlight } from 'react-native'
import COLORS from '../../../config/colors'
import CONSTS from './consts'
import styles from './styles'
import AppText from '../../AppText/AppText'
import { AppMenuItemProps } from './types'
import AppIcon from '../../AppIcon'

function AppMenuItem({
  iconName,
  iconBackgroundColor,
  title,
  subTitle,
  style,
  onPress,
  IconComponent
}: AppMenuItemProps) {
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableHighlight
      underlayColor={COLORS.LIGHT_GRAY}
      activeOpacity={0.85}
      onPress={(e?: GestureResponderEvent) => {
        handlePress(e)
      }}
    >
      <View style={[style, styles.menu]}>
        <View
          style={[styles.menuIcon, { backgroundColor: iconBackgroundColor }]}
        >
          {IconComponent || (
            <AppIcon
              name={iconName}
              size={CONSTS.ICON_SIZE}
              color={COLORS.WHITE}
            />
          )}
        </View>
        <View style={styles.infoBox}>
          <AppText style={styles.menuTitle}>{title}</AppText>
          {subTitle && (
            <AppText style={[styles.menuTitle, styles.menuSubTitle]}>
              {subTitle}
            </AppText>
          )}
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default AppMenuItem
