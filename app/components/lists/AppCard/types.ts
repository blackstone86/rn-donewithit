import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ViewStyle
} from 'react-native'

export type AppCardProps = {
  title: string
  image?: ImageSourcePropType
  imageUrl?: string
  subTitle?: string
  titleMaxLines?: number
  subTitleMaxLines?: number
  style?: StyleProp<ViewStyle>
  onPress?: (e?: GestureResponderEvent) => void
}
