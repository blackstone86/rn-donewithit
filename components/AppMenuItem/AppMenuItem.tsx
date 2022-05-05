import React, { useCallback } from 'react'
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight
} from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppText from '../AppText/AppText'
import { AppMenuItemProps } from './types'
import AppIcon from '../AppIcon'

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

const styles = StyleSheet.create({
  menu: {
    padding: CONSTS.PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE
  },
  menuIcon: {
    width: CONSTS.ICON_WRAP_SIZE,
    height: CONSTS.ICON_WRAP_SIZE,
    borderRadius: CONSTS.ICON_WRAP_SIZE / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: CONSTS.PADDING / 2
  },
  infoBox: {
    flexDirection: 'column'
  },
  menuTitle: {
    fontSize: CONSTS.FONT_SIZE,
    textTransform: 'capitalize'
  },
  menuSubTitle: {
    color: COLORS.GRAY,
    marginTop: 5
  }
})

export default AppMenuItem
