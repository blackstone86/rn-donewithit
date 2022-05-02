import {
  Image,
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#000'
  },
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30
  },
  tomatoBlock: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato'
  },
  turquoiseBlock: {
    width: 50,
    height: 50,
    backgroundColor: 'turquoise'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoBox}>
        <View style={styles.tomatoBlock} />
        <View style={styles.turquoiseBlock} />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/materials/chair.jpg')}
      />
    </SafeAreaView>
  )
}
