import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import AppIcon from '../AppIcon'
import styles from './styles'
import CONSTS from './consts'

type AppTabBarButtonProps = {
  iconName?: string
  iconSize?: number
  iconColor?: string
  onPress?: () => void
}

function AppTabBarButton({
  iconName = CONSTS.iconName,
  iconSize = CONSTS.iconSize,
  iconColor = CONSTS.iconColor,
  onPress
}: AppTabBarButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.firstCircle}>
        <View style={styles.secondCircle}>
          <AppIcon name={iconName} size={iconSize} color={iconColor} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AppTabBarButton
