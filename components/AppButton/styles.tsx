import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  buttonBox: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  }
})

export default styles
