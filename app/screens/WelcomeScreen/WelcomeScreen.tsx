import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import COLORS from '../../config/colors'
import { BACKGROUND, LOGO_RED } from '../../config/images'
import CONSTS from './consts'
import styles from './styles'

export default function App() {
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
            onPress={() => console.log('tapped login button')}
          />
          <AppButton
            style={styles.button}
            title="register"
            backgroundColor={COLORS.SECONDARY}
            onPress={() => console.log('tapped register button')}
          />
        </View>
      </View>
    </>
  )
}
