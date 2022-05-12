import { StyleSheet } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: CONSTS.PADDING
  },
  form: {
    marginTop: 30
  }
})

export default styles
