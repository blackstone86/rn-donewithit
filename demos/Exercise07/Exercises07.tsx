import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../../config/colors';
import CONSTS from './consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.BLACK
  },
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL
  },
  icon: {
    width: CONSTS.ICON_SIZE,
    height: CONSTS.ICON_SIZE,
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

const chairImage = require('../../assets/materials/chair.jpg');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoBox}>
        <MaterialCommunityIcons style={styles.icon} name="close" size={CONSTS.ICON_SIZE} color="white" />
        <MaterialCommunityIcons style={styles.icon} name="trash-can-outline" size={CONSTS.ICON_SIZE} color="white" />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={chairImage}
      />
    </SafeAreaView>
  )
}
