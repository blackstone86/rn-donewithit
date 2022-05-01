import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton'
import COLORS from '../../config/colors'

const MARGIN = 20
const BACKGROUND_BLUR_RADIUS = 6
const backgroundSource = require('../../assets/materials/background.jpg')
const logoSource = require('../../assets/materials/logo-red.png')

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingBottom: 30
  },
  infoBox: {
    flex: 1,
    flexDirection: 'column'
  },
  logoBox: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 80
  },
  logo: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 22,
    marginTop: MARGIN,
    fontWeight: 'bold'
  },
  button: {
    marginHorizontal: MARGIN,
    marginTop: MARGIN
  }
})

export default function App() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      blurRadius={BACKGROUND_BLUR_RADIUS}
      source={backgroundSource}
    >
      <View style={styles.infoBox}>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={logoSource} />
          <Text style={styles.text}>Sell What You Don't Need</Text>
        </View>
        <AppButton
          style={styles.button}
          title="LOGIN"
          onPress={() => console.log('tapped login button')}
        />
        <AppButton
          style={styles.button}
          title="REGISTER"
          backgroundColor={COLORS.SECONDARY}
          onPress={() => console.log('tapped register button')}
        />
      </View>
    </ImageBackground>
  )
}
