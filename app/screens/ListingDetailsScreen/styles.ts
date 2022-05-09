import { StyleSheet } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  image: {
    width: '100%',
    height: CONSTS.IMAGE_HEIGHT
  },
  infoBox: {
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL,
    paddingVertical: CONSTS.PADDING_VERTICAL
  },
  text: {
    lineHeight: CONSTS.LINE_HEIGHT,
    fontWeight: 'bold'
  },
  title: {
    fontSize: CONSTS.TITLE_FONT_SIZE
  },
  subTitle: {
    fontSize: CONSTS.SUBTITLE_FONT_SIZE,
    color: COLORS.SECONDARY
  },
  sellerBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 36,
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL
  },
  avatar: {
    width: CONSTS.AVATAR_SIZE,
    height: CONSTS.AVATAR_SIZE,
    borderRadius: CONSTS.AVATAR_SIZE / 2,
    marginRight: CONSTS.PADDING_HORIZONTAL / 2
  },
  sellerText: {
    fontSize: CONSTS.SUBTITLE_FONT_SIZE
  },
  total: {
    color: COLORS.GRAY,
    lineHeight: CONSTS.TOTAL_LINE_HEIGHT
  }
})

export default styles
