import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppText from '../AppText/AppText'

type AppMenuItemProps = {
  iconName: any
  iconBackgroundColor: string
  title: string
  style?: StyleProp<ViewStyle>
}
function AppMenuItem({
  iconName,
  iconBackgroundColor,
  title,
  style
}: AppMenuItemProps) {
  return (
    <View style={[style, styles.menu]}>
      <View style={[styles.menuIcon, { backgroundColor: iconBackgroundColor }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={CONSTS.ICON_SIZE}
          color={COLORS.WHITE}
        />
      </View>
      <AppText style={styles.menuTitle}>{title}</AppText>
    </View>
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
  menuTitle: {
    fontSize: CONSTS.FONT_SIZE,
    textTransform: 'capitalize'
  }
})

export default AppMenuItem
