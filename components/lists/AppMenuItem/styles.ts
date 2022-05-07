import { StyleSheet } from 'react-native'
import COLORS from '../../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  menu: {
    padding: CONSTS.PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE
  },
  menuIcon: {
    width: CONSTS.ICON_WRAP_SIZE,
    height: CONSTS.ICON_WRAP_SIZE,
    borderRadius: CONSTS.ICON_WRAP_SIZE / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: CONSTS.PADDING / 2
  },
  infoBox: {
    flexDirection: 'column'
  },
  menuTitle: {
    fontSize: CONSTS.FONT_SIZE,
    textTransform: 'capitalize'
  },
  menuSubTitle: {
    color: COLORS.GRAY,
    marginTop: 5
  }
})

export default styles
