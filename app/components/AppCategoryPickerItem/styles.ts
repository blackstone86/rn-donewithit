import COLORS from '../../config/colors'
import CONSTS from './consts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10
  },
  iconWrap: {
    width: CONSTS.ICON_WRAP_SIZE,
    height: CONSTS.ICON_WRAP_SIZE,
    borderRadius: CONSTS.ICON_WRAP_SIZE / 2,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 6,
    fontSize: CONSTS.TEXT_INPUT_FONT_SIZE,
    width: CONSTS.ICON_WRAP_SIZE,
    textAlign: 'center'
  },
  selected: {
    color: COLORS.PRIMARY
  }
})

export default styles
