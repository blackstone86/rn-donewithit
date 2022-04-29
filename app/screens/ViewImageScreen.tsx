import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

function ViewImageScreen(props: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoBox}>
        <View style={styles.tomatoBlock} />
        <View style={styles.turquoiseBlock} />
      </View>
      <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')} />
    </SafeAreaView>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
  },
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  tomatoBlock: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary
  },
  turquoiseBlock: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
