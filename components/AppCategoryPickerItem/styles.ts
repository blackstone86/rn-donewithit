import COLORS from '../../config/colors'
import CONSTS from './consts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    lineHeight: 50,
    paddingHorizontal: 20,
    fontSize: CONSTS.TEXT_INPUT_FONT_SIZE
  },
  selected: {
    color: COLORS.PRIMARY
  }
})

export default styles
