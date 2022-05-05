import React, { useCallback, useState } from 'react'
import {
  TextInput,
  StyleSheet,
  View,
  KeyboardTypeOptions,
  Platform
} from 'react-native'
import AppIcon from '../AppIcon'
import CONSTS from './consts'

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
      <AppIcon
        name={iconName}
        color={iconColor}
        size={iconSize}
        style={styles.icon}
      />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTS.BACKGROUND_COLOR,
    borderRadius: CONSTS.BORDER_RADIUS,
    padding: CONSTS.PADDING,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    marginRight: CONSTS.PADDING
  },
  textInput: {
    ...Platform.select({
      android: {
        fontFamily: 'Roboto'
      },
      ios: {
        fontFamily: 'Courier'
      }
    }),
    fontSize: CONSTS.TEXT_INPUT_FONT_SIZE
  }
})

export default AppTextInput
