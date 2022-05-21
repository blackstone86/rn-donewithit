import { StyleSheet, Platform } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    top: CONSTS.TabBarButtonTop
  },
  firstCircle: {
    ...Platform.select({
      android: {
        elevation: 1
      },
      ios: {
        shadowOpacity: 1
      }
    }),
    backgroundColor: COLORS.WHITE,
    borderRadius: CONSTS.firstCircleSize / 2,
    width: CONSTS.firstCircleSize,
    height: CONSTS.firstCircleSize,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.PRIMARY
  },
  secondCircle: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: CONSTS.secondCircleSize / 2,
    width: CONSTS.secondCircleSize,
    height: CONSTS.secondCircleSize,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
