import React from 'react'
import { TextInput, View } from 'react-native'
import AppIcon from '../../AppIcon'
import CONSTS from './consts'
import styles from './styles'

// type AppTextInputProps = {
//   placeholder?: string
//   keyboardType?: KeyboardTypeOptions
//   iconName?: string
//   iconColor?: string
//   iconSize?: number
//   maxLength?: number
//   secureTextEntry?: boolean
//   onChangeText?: (text: string) => void
// }

function AppTextInput({
  // Container
  icon = CONSTS.HAS_ICON,
  style,
  textInputStyle,
  // AppIcon
  iconName = CONSTS.ICON_NAME,
  iconColor = CONSTS.ICON_COLOR,
  iconSize = CONSTS.ICON_SIZE,
  // InputText
  placeholder = CONSTS.PLACEHOLDER,
  keyboardType = CONSTS.KEYBOARD_TYPE,
  maxLength = CONSTS.MAX_LENGTH,
  clearButtonMode = CONSTS.CLEAR_BUTTON_MODE,
  ...otherProps
}: any) {
  return (
    <View style={[style, styles.container]}>
      {icon && (
        <AppIcon
          name={iconName}
          color={iconColor}
          size={iconSize}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholder={placeholder}
        clearButtonMode={clearButtonMode}
        maxLength={maxLength}
        keyboardType={keyboardType}
        style={[styles.textInput, textInputStyle]}
        {...otherProps}
      />
    </View>
  )
}

export default AppTextInput
