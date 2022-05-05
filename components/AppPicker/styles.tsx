import { Platform, StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTS.BACKGROUND_COLOR,
    borderRadius: CONSTS.BORDER_RADIUS,
    padding: CONSTS.PADDING,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    marginRight: CONSTS.PADDING
  },
  textInput: {
    ...Platform.select({
      android: {
        fontFamily: 'Roboto'
      },
      ios: {
        fontFamily: 'Courier'
      }
    })
  },
  placeholder: {
    fontSize: CONSTS.TEXT_INPUT_FONT_SIZE,
    flex: 1
  }
})

export default styles
