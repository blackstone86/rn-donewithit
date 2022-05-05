import React, { useCallback, useState } from 'react'
import {
  View,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  Modal,
  Button
} from 'react-native'
import AppIcon from '../AppIcon'
import AppText from '../AppText'
import CONSTS from './consts'
import styles from './styles'

function AppPicker({
  style,
  placeholder = CONSTS.PLACEHOLDER,
  options,
  // AppIcon
  iconName = CONSTS.ICON_NAME,
  iconColor = CONSTS.ICON_COLOR,
  iconSize = CONSTS.ICON_SIZE
}: any) {
  const [open, setOpen] = useState<boolean>(false)
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    setOpen(!open)
  }, [])
  console.log(options)
  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[style, styles.container]}>
          <AppIcon
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={styles.icon}
          />
          <AppText style={styles.placeholder}>{placeholder}</AppText>
          <AppIcon name="chevron-down" color={iconColor} size={iconSize} />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={open}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setOpen(!open)
        }}
      >
        <Button
          title="Close"
          onPress={() => {
            setOpen(!open)
          }}
        ></Button>
      </Modal>
    </>
  )
}

export default AppPicker
