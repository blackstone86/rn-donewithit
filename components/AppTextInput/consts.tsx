import { KeyboardTypeOptions } from 'react-native'
import COLORS from '../../config/colors'

type constsType = {
  PLACEHOLDER: string
  ICON_NAME: string
  KEYBOARD_TYPE: KeyboardTypeOptions
  ICON_COLOR: string
  ICON_SIZE: number
  BORDER_RADIUS: number
  PADDING: number
  BACKGROUND_COLOR: string
  MAX_LENGTH: number
}
const CONSTS: constsType = {
  PLACEHOLDER: 'Write something here...',
  ICON_NAME: 'email',
  KEYBOARD_TYPE: 'default',
  ICON_COLOR: COLORS.GRAY,
  ICON_SIZE: 20,
  BORDER_RADIUS: 20,
  PADDING: 10,
  BACKGROUND_COLOR: '#fbf6f8',
  MAX_LENGTH: 50
}

export default CONSTS
