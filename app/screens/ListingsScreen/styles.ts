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
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    paddingHorizontal: CONSTS.PADDING
  },
  text: {
    fontSize: CONSTS.ERROR_MESSAGE_FONT_SIZE,
    textAlign: 'center'
  },
  retryButton: {
    width: '100%',
    marginTop: CONSTS.PADDING
  }
})

export default styles
