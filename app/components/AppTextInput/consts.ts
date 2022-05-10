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
  TEXT_INPUT_FONT_SIZE: number
  CLEAR_BUTTON_MODE: string
  HAS_ICON: boolean
  HEIGHT: number
}
const CONSTS: constsType = {
  PLACEHOLDER: 'Write something here...',
  ICON_NAME: 'email',
  KEYBOARD_TYPE: 'default',
  ICON_COLOR: COLORS.GRAY,
  ICON_SIZE: 20,
  BORDER_RADIUS: 25,
  PADDING: 10,
  BACKGROUND_COLOR: COLORS.INPUT_BACKGROUND_COLOR,
  MAX_LENGTH: 50,
  TEXT_INPUT_FONT_SIZE: 18,
  CLEAR_BUTTON_MODE: 'always',
  HAS_ICON: true,
  HEIGHT: 50
}

export default CONSTS
