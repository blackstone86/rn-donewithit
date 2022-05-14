import React, { ReactDOM, ReactNode, useCallback } from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import { AppPickerItemProps } from '../../components/AppPickerItem'
import AppText from '../../components/AppText'
import AppIcon from '../AppIcon'
import styles from './styles'
import COLORS from '../../config/colors'
import CONSTS from './consts'
function AppCategoryPickerItem({
  label,
  selected,
  onPress,
  data
}: AppPickerItemProps): JSX.Element {
  const {
    iconName = CONSTS.ICON_NAME,
    iconColor = COLORS.WHITE,
    iconSize = CONSTS.ICON_SIZE,
    iconBackgroundColor = COLORS.PRIMARY
  } = data
  /**
    "iconBackgroundColor": "lightslategrey",
    "iconName": "application-outline",
    "label": "Other",
    "value": 9,
   */
  const customStyles = StyleSheet.create({
    iconWrap: {
      backgroundColor: iconBackgroundColor
    }
  })
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.iconWrap, customStyles.iconWrap]}>
        {/* <AppIcon name={iconName} size={iconSize} color={iconColor} /> */}
      </View>
      <AppText style={[styles.text, selected && styles.selected]}>
        {label}
      </AppText>
    </TouchableOpacity>
  )
}

export default AppCategoryPickerItem
