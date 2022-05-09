import { Image, View } from 'react-native'
import React from 'react'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import AppIcon from '../../components/AppIcon'
import { CHAIR } from '../../config/images'
import styles from './styles'

export default function ViewImageScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <View style={styles.infoBox}>
        <AppIcon
          style={styles.icon}
          name="close"
          size={CONSTS.ICON_SIZE}
          color="white"
        />
        <AppIcon
          style={styles.icon}
          name="trash-can-outline"
          size={CONSTS.ICON_SIZE}
          color="white"
        />
      </View>
      <Image style={styles.image} resizeMode="contain" source={CHAIR} />
    </AppSafeAreaView>
  )
}
