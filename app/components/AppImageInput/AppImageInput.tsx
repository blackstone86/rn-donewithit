import React, { useEffect, useReducer } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import AppIcon from '../AppIcon'
import * as ImagePicker from 'expo-image-picker'
import { requestMediaPermissions } from './askPermissions'
import { AppImageInputProps, ActionKind } from './types'
import { reducer } from './reducers'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import styles from './styles'

function AppImageInput({
  onChange,
  max = CONSTS.MAX_PHOTOS,
  addButtonBackgroundColor = COLORS.INPUT_BACKGROUND_COLOR,
  addButtonIconName = CONSTS.ADD_BUTTON_ICON_NAME,
  addButtonIconColor = CONSTS.ADD_BUTTON_ICON_COLOR,
  addButtonIconSize = CONSTS.ADD_BUTTON_ICON_SIZE
}: AppImageInputProps) {
  const customStyles = StyleSheet.create({
    addButton: {
      backgroundColor: addButtonBackgroundColor
    }
  })
  const [state, dispatch] = useReducer(reducer, {
    values: []
  })
  useEffect(() => {
    requestMediaPermissions()
  }, [])
  useEffect(() => {
    typeof onChange === 'function' && onChange(state.values)
  }, [state.values])
  const handleAddButtonPress = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        dispatch({ type: ActionKind.ADD, payload: result.uri })
      }
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }
  const handleImagePress = (index: number) => {
    dispatch({ type: ActionKind.REMOVE, payload: index })
  }
  return (
    <View style={styles.container}>
      {state.values.map((value: string, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            onPress={() => {
              handleImagePress(index)
            }}
          >
            <Image
              style={[styles.box, styles.image]}
              source={{
                uri: value
              }}
            />
          </TouchableOpacity>
        )
      })}
      {state.values.length < max && (
        <TouchableOpacity activeOpacity={0.85} onPress={handleAddButtonPress}>
          <View style={[styles.box, styles.addButton, customStyles.addButton]}>
            <AppIcon
              color={addButtonIconColor}
              size={addButtonIconSize}
              name={addButtonIconName}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AppImageInput
