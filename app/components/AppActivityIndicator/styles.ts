import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
    zIndex: 1
  },
  smallSize: {
    width: CONSTS.SMALL_SIZE,
    height: CONSTS.SMALL_SIZE
  },
  largeSize: {
    width: CONSTS.LARGE_SIZE,
    height: CONSTS.LARGE_SIZE
  }
})

export default styles
