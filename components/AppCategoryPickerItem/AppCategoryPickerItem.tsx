import React, { ReactNode, useCallback } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import { AppPickerItemProps } from '../../components/AppPickerItem'
import AppText from '../../components/AppText'
import styles from './styles'
function AppCategoryPickerItem({
  label,
  selected,
  onPress
}: AppPickerItemProps): ReactNode {
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
  return (
    <TouchableOpacity onPress={handlePress}>
      <AppText style={[styles.text, selected && styles.selected]}>
        {label}
      </AppText>
    </TouchableOpacity>
  )
}

export default AppCategoryPickerItem
