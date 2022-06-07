import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingBottom: CONSTS.PADDING
  },
  card: {
    marginHorizontal: CONSTS.PADDING,
    marginTop: CONSTS.PADDING
  }
})

export default styles
