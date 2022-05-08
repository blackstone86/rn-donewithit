import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../../config/colors'

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    width: CONSTS.AVATAR_SIZE,
    height: CONSTS.AVATAR_SIZE,
    borderRadius: CONSTS.AVATAR_SIZE / 2,
    marginRight: CONSTS.MARGIN_RIGHT
  },
  infoBox: {
    flex: 1,
    height: '100%'
  },
  title: {
    fontSize: CONSTS.SUBTITLE_FONT_SIZE
  },
  subTitle: {
    color: COLORS.GRAY,
    lineHeight: CONSTS.TOTAL_LINE_HEIGHT
  }
})

export default styles
