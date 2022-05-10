import React, { useEffect, useReducer } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import AppIcon from '../AppIcon'
import * as ImagePicker from 'expo-image-picker'
import { requestMediaPermissions } from './askPermissions'
import { AppImageInputProps, StateType, ActionType, ActionKind } from './types'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import styles from './styles'

function reducer(state: StateType, action: ActionType): StateType {
  const { values } = state
  const { type, payload } = action
  switch (type) {
    case ActionKind.ADD:
      const uri = payload
      const idx = values.findIndex((value: string) => {
        return value === uri
      })
      const isExist = idx !== -1
      if (!isExist) return { values: [...values, uri] }
      return state
    case ActionKind.REMOVE:
      const index = payload
      values.splice(index, 1)
      return { values: [...values] }
  }
}

function AppImageInput({
  onChange,
  max = CONSTS.MAX_PHOTOS
}: AppImageInputProps) {
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
          <View style={[styles.box, styles.addButton]}>
            <AppIcon
              color={COLORS.GRAY}
              size={CONSTS.ICON_SIZE}
              name={CONSTS.ADD_BUTTON_ICON_NAME}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AppImageInput
