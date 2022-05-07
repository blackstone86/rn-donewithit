import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import AppText from '../AppText'
import useStyles from './useStyles'
import { AppButtonProps } from './types'
import CONSTS from './consts'

function AppButton({
  title = CONSTS.BUTTON_TITLE,
  fontSize,
  height,
  backgroundColor,
  borderRadius,
  style,
  onPress
}: AppButtonProps) {
  // const handlePress = useCallback((e: GestureResponderEvent) => { // not recommend!
  //   typeof onPress === 'function' && onPress(e)
  // }, [])
  const styles = useStyles({ fontSize, height, backgroundColor, borderRadius })
  const button = (
    <View style={styles.button}>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  )
  const isAndroid = Platform.OS === 'android'
  return (
    <View style={[styles.buttonBox, style]}>
      {isAndroid ? (
        <TouchableNativeFeedback onPress={onPress}>
          {button}
        </TouchableNativeFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={onPress}>
          {button}
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

export default AppButton
