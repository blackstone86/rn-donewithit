import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../config/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL
  },
  avatar: {
    width: CONSTS.AVATAR_SIZE,
    height: CONSTS.AVATAR_SIZE,
    borderRadius: CONSTS.AVATAR_SIZE / 2,
    marginRight: CONSTS.PADDING_HORIZONTAL / 2
  },
  infoBox: {
    flexShrink: 1
  },
  text: {
    fontSize: CONSTS.FONT_SIZE
  },
  subTitle: {
    color: COLORS.GRAY,
    marginTop: CONSTS.SUBTITLE_MARGIN_TOP
  }
})

export default styles
