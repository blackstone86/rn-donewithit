import { ReactNode } from 'react'
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

export type AppMenuItemProps = {
  iconName?: any
  iconBackgroundColor: string
  title: string
  subTitle?: string
  style?: StyleProp<ViewStyle>
  onPress?: (e?: GestureResponderEvent) => void
  IconComponent?: ReactNode
}
