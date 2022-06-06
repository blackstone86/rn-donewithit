import React, { useEffect, useReducer, useRef } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native'
import AppIcon from '../AppIcon'
import * as ImagePicker from 'expo-image-picker'
import { requestMediaPermissions } from './askPermissions'
import { AppImageInputProps, ActionKind } from './types'
import { reducer } from './reducers'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import styles from './styles'
import logger from '../../utils/logger'

function AppImageInput({
  onChange,
  onAddButtonPress,
  imgageUris = CONSTS.IMAGE_URIS,
  max = CONSTS.MAX_PHOTOS,
  addButtonBackgroundColor = COLORS.INPUT_BACKGROUND_COLOR,
  addButtonIconName = CONSTS.ADD_BUTTON_ICON_NAME,
  addButtonIconColor = CONSTS.ADD_BUTTON_ICON_COLOR,
  addButtonIconSize = CONSTS.ADD_BUTTON_ICON_SIZE
}: AppImageInputProps) {
  const scrollView: any = useRef()
  const [state, dispatch] = useReducer(reducer, {
    values: imgageUris
  })
  useEffect(() => {
    requestMediaPermissions()
  }, [])
  useEffect(() => {
    typeof onChange === 'function' && onChange(state.values)
  }, [state.values])
  useEffect(() => {
    dispatch({ type: ActionKind.UPDATE, payload: imgageUris })
  }, [imgageUris])
  const handleAddButtonPress = async () => {
    try {
      typeof onAddButtonPress === 'function' && onAddButtonPress()
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // default value
        quality: 0.5
      })
      if (!result.cancelled) {
        dispatch({ type: ActionKind.ADD, payload: result.uri })
      }
    } catch (error) {
      console.log('Error reading an image', error)
      logger.log(error)
    }
  }
  const handleImagePress = (index: number) => {
    Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      {
        text: 'No',
        style: 'cancel' // ios
      },
      {
        text: 'Yes',
        onPress: () => dispatch({ type: ActionKind.REMOVE, payload: index })
      }
    ])
  }
  const handleContentSizeChange = () => {
    scrollView?.current?.scrollToEnd()
  }
  const customStyles = StyleSheet.create({
    addButton: {
      backgroundColor: addButtonBackgroundColor
    }
  })

  return (
    <ScrollView
      horizontal
      ref={scrollView}
      onContentSizeChange={handleContentSizeChange}
    >
      <View style={styles.container}>
        {state.values.map((value: string, index: number) => {
          return (
            <TouchableOpacity
              key={value}
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
            <View
              style={[styles.box, styles.addButton, customStyles.addButton]}
            >
              <AppIcon
                color={addButtonIconColor}
                size={addButtonIconSize}
                name={addButtonIconName}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  )
}

export default AppImageInput
