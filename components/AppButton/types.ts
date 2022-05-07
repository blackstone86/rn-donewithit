import { StyleProp, ViewStyle } from 'react-native'

export type AppButtonProps = {
  title?: string
  fontSize?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
  style?: StyleProp<ViewStyle>
  // onPress?: (e?: GestureResponderEvent) => void
  onPress?: (e?: any) => void // fix for FormEvent<HTMLFormElement> eventType.
}

export type useStylesProps = {
  fontSize?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
}
