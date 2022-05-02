import React, { useCallback } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
  GestureResponderEvent,
  ViewStyle,
  StyleProp
} from 'react-native'
import AppText from '../AppText'
import useStyles from './useStyles'

type AppButtonProps = {
  title: string
  fontSize?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
  style?: StyleProp<ViewStyle>
  onPress?: (e?: GestureResponderEvent) => void
}

function AppButton({
  title,
  fontSize,
  height,
  backgroundColor,
  borderRadius,
  style,
  onPress
}: AppButtonProps) {
  const handlePress = useCallback((e: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e)
  }, [])
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
        <TouchableNativeFeedback onPress={handlePress}>
          {button}
        </TouchableNativeFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={handlePress}>
          {button}
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

export default AppButton
