import { StyleSheet } from 'react-native'
import CONSTS from './consts'
import COLORS from '../../../config/colors'

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatarWrap: {
    height: '100%'
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
    marginTop: CONSTS.PADDING
  }
})

export default styles
