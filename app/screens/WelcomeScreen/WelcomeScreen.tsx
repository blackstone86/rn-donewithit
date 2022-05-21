import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import COLORS from '../../config/colors'
import { BACKGROUND, LOGO_RED } from '../../config/images'
import CONSTS from './consts'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import ScreenType from '../../navigators/screenTypes'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        blurRadius={CONSTS.BACKGROUND_BLUR_RADIUS}
        source={BACKGROUND}
      />
      <View style={styles.container}>
        <View style={styles.infoBox}>
          <View style={styles.logoBox}>
            <Image style={styles.logo} source={LOGO_RED} />
            <AppText style={styles.text}>Sell What You Don't Need</AppText>
          </View>
          <AppButton
            style={styles.button}
            title="login"
            onPress={() => {
              navigation.navigate(ScreenType.LOGIN as never)
            }}
          />
          <AppButton
            style={styles.button}
            title="register"
            backgroundColor={COLORS.SECONDARY}
            onPress={() => {
              navigation.navigate(ScreenType.REGISTER as never)
            }}
          />
        </View>
      </View>
    </>
  )
}
