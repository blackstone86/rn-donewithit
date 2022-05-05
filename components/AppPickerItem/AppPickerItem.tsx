import React, { ReactNode, useCallback } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import AppText from '../AppText'
import styles from './styles'

type AppPickerItemProps = {
  children: ReactNode
  onPress: (e?: GestureResponderEvent) => void
}

function AppPickerItem({ children, onPress }: AppPickerItemProps) {
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableOpacity onPress={handlePress}>
      <AppText style={styles.text}>{children}</AppText>
    </TouchableOpacity>
  )
}

export default AppPickerItem
