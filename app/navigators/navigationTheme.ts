import { DefaultTheme } from '@react-navigation/native'
import COLORS from '../config/colors'

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY, // set tint various elements, eg: Tab.Navigator->screenOptions->tabBarActiveTintColor
    background: COLORS.WHITE, // screen background color
    card: COLORS.WHITE, // header background color
    text: COLORS.PRIMARY // header text color
  }
}
