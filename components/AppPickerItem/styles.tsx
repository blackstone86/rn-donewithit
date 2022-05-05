import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

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
