import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';

function WelcomeScreen(props: any) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.infoBox}>
        <View style={styles.logoBox}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')} />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={styles.tomatoBar} />
        <View style={styles.turquoiseBar} />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
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

