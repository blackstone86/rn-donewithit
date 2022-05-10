import { StyleSheet } from 'react-native'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: CONSTS.BOX_SIZE,
    height: CONSTS.BOX_SIZE,
    borderRadius: CONSTS.BORDER_RADIUS,
    marginRight: CONSTS.PADDING,
    marginTop: CONSTS.PADDING
  },
  image: {},
  addButton: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
