import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
      },
      ios: {
        fontSize: 18,
        fontFamily: 'Courier',
        fontWeight: '100'
      }
    }),
    // ==============================
    fontStyle: 'italic',
    color: 'tomato',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    textAlign: 'center',
    lineHeight: 36
  }
})

export default styles
