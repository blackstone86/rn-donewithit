import { Platform, StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: CONSTS.BOX_SIZE,
    height: CONSTS.BOX_SIZE,
    borderRadius: CONSTS.BORDER_RADIUS,
    marginRight: CONSTS.PADDING,
    marginBottom: CONSTS.PADDING
  },
  image: {},
  addButton: {
    backgroundColor: COLORS.INPUT_BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
