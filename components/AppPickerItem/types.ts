import { GestureResponderEvent } from 'react-native'

export type AppPickerItemProps = {
  label: string
  selected?: boolean
  onPress?: (e?: GestureResponderEvent) => void
}
