import { StyleSheet, Platform } from 'react-native'
import COLORS from '../../config/colors'
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        fontFamily: 'Roboto'
      },
      ios: {
        fontFamily: 'Courier'
      }
    }),
    fontSize: 13,
    color: COLORS.BLACK
  }
})

export default styles
