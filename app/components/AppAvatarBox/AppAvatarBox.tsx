import React from 'react'
import { View, Image } from 'react-native'
import AppText from '../AppText'
import { AppAvatarBoxProps } from './types'
import styles from './styles'

function AppAvatarBox({ title, image, subTitle, style }: AppAvatarBoxProps) {
  return (
    <View style={[style, styles.container]}>
      <Image style={styles.avatar} source={image} />
      <View style={styles.infoBox}>
        <AppText style={styles.text}>{title}</AppText>
        <AppText style={[styles.text, styles.subTitle]}>{subTitle}</AppText>
      </View>
    </View>
  )
}

export default AppAvatarBox
