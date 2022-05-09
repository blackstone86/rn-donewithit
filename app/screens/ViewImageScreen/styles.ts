import { StyleSheet } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK
  },
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL
  },
  icon: {
    width: CONSTS.ICON_SIZE,
    height: CONSTS.ICON_SIZE
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default styles
