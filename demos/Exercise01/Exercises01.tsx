import {
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
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
    marginTop: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  tomatoBar: {
    width: '100%',
    height: 60,
    backgroundColor: 'tomato'
  },
  turquoiseBar: {
    width: '100%',
    height: 60,
    backgroundColor: 'turquoise'
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/materials/background.jpg')}
      />
      <View style={styles.infoBox}>
        <View style={styles.logoBox}>
          <Image
            style={styles.logo}
            source={require('../../assets/materials/logo-red.png')}
          />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={styles.tomatoBar} />
        <View style={styles.turquoiseBar} />
      </View>
    </SafeAreaView>
  )
}
