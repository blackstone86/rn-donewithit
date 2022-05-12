import { StyleSheet } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  avatarBox: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: CONSTS.PADDING,
    marginTop: 30,
    marginBottom: 40
  },
  lastMenuItem: {
    marginTop: CONSTS.PADDING
  }
})

export default styles
