import React, { useCallback } from 'react'
import {
  View,
  GestureResponderEvent,
  TouchableWithoutFeedback
} from 'react-native'
import AppIcon from '../AppIcon'
import AppText from '../AppText'
import CONSTS from './consts'
import styles from './styles'

function AppPicker({
  style,
  placeholder = CONSTS.PLACEHOLDER,
  onPress,
  // AppIcon
  iconName = CONSTS.ICON_NAME,
  iconColor = CONSTS.ICON_COLOR,
  iconSize = CONSTS.ICON_SIZE
}: any) {
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[style, styles.container]}>
        <AppIcon
          name={iconName}
          color={iconColor}
          size={iconSize}
          style={styles.icon}
        />
        <AppText style={styles.placeholder}>{placeholder}</AppText>
        <AppIcon name="chevron-down" color={iconColor} size={iconSize} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default AppPicker
