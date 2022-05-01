import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingBottom: 30,
  },
  infoBox: {
    flex: 1,
    flexDirection: 'column',
  },
  logoBox: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 20,
  },
})

export default function App() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/materials/background.jpg')} >
      <View style={styles.infoBox}>
        <View style={styles.logoBox}>
          <Image
            style={styles.logo}
            source={require('../../assets/materials/logo-red.png')} />
          <Text>Sell What You Don't Need</Text>
        </View>
        <AppButton
          style={styles.button}
          title="LOGIN"
          onPress={() => console.log('tapped AppButton')} />
        <AppButton
          style={styles.button}
          title="REGISTER"
          backgroundColor={COLORS.SECONDARY}
          onPress={() => console.log('tapped AppButton')} />
      </View>
    </ImageBackground>
  )
}
