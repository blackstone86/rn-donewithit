import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native'

export type AppAvatarBoxProps = {
  title: string
  image: ImageSourcePropType
  subTitle?: string
  style?: StyleProp<ViewStyle>
}
