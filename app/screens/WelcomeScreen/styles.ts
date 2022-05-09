import { StyleSheet } from 'react-native'
import CONSTS from './consts'

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    paddingBottom: 30
  },
  infoBox: {
    flex: 1,
    flexDirection: 'column'
  },
  logoBox: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 80
  },
  logo: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 22,
    marginTop: CONSTS.MARGIN,
    fontWeight: 'bold'
  },
  button: {
    marginHorizontal: CONSTS.MARGIN,
    marginTop: CONSTS.MARGIN
  }
})

export default styles
