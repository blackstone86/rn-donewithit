import React, { ReactNode, useCallback } from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { AppPickerItemProps } from '../../components/AppPickerItem'
import AppText from '../../components/AppText'
import COLORS from '../../config/colors'
const CONSTS = {
  TEXT_INPUT_FONT_SIZE: 18
}

function PickerItem({
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

const styles = StyleSheet.create({
  text: {
    lineHeight: 50,
    paddingHorizontal: 20,
    fontSize: CONSTS.TEXT_INPUT_FONT_SIZE
  },
  selected: {
    color: COLORS.PRIMARY
  }
})

export default PickerItem
