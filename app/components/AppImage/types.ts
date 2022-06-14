import { ImageSourcePropType, StyleProp } from 'react-native'

export type AppImageProps = {
  imageUrl: string
  thumbnailUrl?: string
  image?: ImageSourcePropType
  style?: StyleProp<any>
}
