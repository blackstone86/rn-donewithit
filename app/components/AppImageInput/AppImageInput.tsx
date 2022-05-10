import React, { useCallback, useEffect, useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import AppIcon from '../AppIcon'
import * as ImagePicker from 'expo-image-picker'
import { requestMediaPermissions } from './askPermissions'
import { AppImageInputProps } from './types'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import styles from './styles'

function AppImageInput({ onChange }: AppImageInputProps) {
  const [values, setValues] = useState<string[]>([])
  useEffect(() => {
    requestMediaPermissions()
  }, [])
  useEffect(() => {
    typeof onChange === 'function' && onChange(values)
  }, [values])
  const handleAddButtonPress = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        setValues([...values, result.uri])
      }
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }, [])

  return (
    <View style={styles.container}>
      {values.map((value, index) => {
        return (
          <Image
            key={index}
            style={[styles.box, styles.image]}
            source={{
              uri: value
            }}
          />
        )
      })}
      <TouchableOpacity activeOpacity={0.85} onPress={handleAddButtonPress}>
        <View style={[styles.box, styles.addButton]}>
          <AppIcon
            color={COLORS.GRAY}
            size={CONSTS.ICON_SIZE}
            name={CONSTS.ADD_BUTTON_ICON_NAME}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AppImageInput
