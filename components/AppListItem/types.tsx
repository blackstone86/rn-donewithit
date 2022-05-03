import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ViewStyle
} from 'react-native'

export type AppListItemProps = {
  title: string
  subTitle?: string
  image: ImageSourcePropType
  style?: StyleProp<ViewStyle>
  onPress?: (e?: GestureResponderEvent, data?: AppListItemData) => void
}

export type AppListItemData = {
  title: string
  subTitle?: string
  image: ImageSourcePropType
}
