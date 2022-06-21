import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: CONSTS.PADDING,
    paddingTop: CONSTS.PADDING_TOP
  },
  modalBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
