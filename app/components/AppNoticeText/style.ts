import { StyleSheet } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    left: 0,
    width: '100%',
    color: COLORS.WHITE,
    backgroundColor: COLORS.PRIMARY,
    textAlign: 'center',
    fontSize: CONSTS.FONT_SIZE,
    padding: CONSTS.PADDING
  }
})

export default styles
