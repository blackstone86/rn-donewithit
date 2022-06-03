import { StyleSheet } from 'react-native'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
