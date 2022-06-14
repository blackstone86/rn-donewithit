import React from 'react'
import { Image } from 'react-native'
import { Image as ImageCache } from 'react-native-expo-image-cache'
import getCurrentSettings, { EnvironmentType } from '../../config/settings'
import { AppImageProps } from './types'

const CURRENT_SETTINGS = getCurrentSettings()
const isProd = CURRENT_SETTINGS.environment === EnvironmentType.PROD

function AppImage({ imageUrl, thumbnailUrl, image, style }: AppImageProps) {
  return isProd ? (
    <ImageCache
      style={style}
      uri={imageUrl}
      preview={{ uri: thumbnailUrl }}
      tint="light"
    />
  ) : (
    <Image style={style} source={{ uri: imageUrl } || image} />
  )
}

export default AppImage
