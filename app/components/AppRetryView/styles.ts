import { StyleSheet } from 'react-native'
import CONSTS from './consts'

const styles = StyleSheet.create({
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
