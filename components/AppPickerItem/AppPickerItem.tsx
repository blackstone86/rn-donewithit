import React, { useCallback } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import AppText from '../AppText'
import styles from './styles'

type AppPickerItemProps = {
  label: string
  onPress: (e?: GestureResponderEvent) => void
}

function AppPickerItem({ label, onPress }: AppPickerItemProps) {
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableOpacity onPress={handlePress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

export default AppPickerItem
