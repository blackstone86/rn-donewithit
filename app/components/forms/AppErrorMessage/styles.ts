import CONSTS from './consts'
import COLORS from '../../../config/colors'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  text: {
    color: COLORS.PRIMARY,
    fontSize: CONSTS.FONT_SIZE,
    height: CONSTS.ERROR_HEIGHT,
    lineHeight: CONSTS.ERROR_HEIGHT,
    width: '100%'
  }
})

export default styles
