import React, { useCallback, useState } from 'react'
import { TextInput, StyleSheet, View, KeyboardTypeOptions } from 'react-native'
import AppIcon from '../AppIcon'
import CONSTS from './consts'

type AppTextInputProps = {
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  iconName?: string
  iconColor?: string
  iconSize?: number
  maxLength?: number
  secureTextEntry?: boolean
  onChangeText?: (text: string) => void
}

function AppTextInput({
  placeholder = CONSTS.PLACEHOLDER,
  iconName = CONSTS.ICON_NAME,
  iconColor = CONSTS.ICON_COLOR,
  iconSize = CONSTS.ICON_SIZE,
  keyboardType = CONSTS.KEYBOARD_TYPE,
  maxLength = CONSTS.MAX_LENGTH,
  secureTextEntry = CONSTS.SECURE_TEXT_ENTRY,
  onChangeText
}: AppTextInputProps) {
  const [value, setValue] = useState('')
  const handleChangeText = useCallback((text: string) => {
    typeof onChangeText === 'function' && onChangeText(text)
  }, [])

  return (
    <View style={styles.container}>
      <AppIcon
        name={iconName}
        color={iconColor}
        size={iconSize}
        style={styles.icon}
      />
      <TextInput
        secureTextEntry={secureTextEntry} // secureTextEntry={true}
        placeholder={placeholder}
        clearButtonMode="always"
        maxLength={maxLength}
        keyboardType={keyboardType}
        value={value}
        multiline={false}
        onChangeText={(text) => {
          setValue(text)
          handleChangeText(text)
        }}
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
  }
})

export default AppTextInput
