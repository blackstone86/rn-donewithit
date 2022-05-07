import React, { useCallback, useEffect, useState } from 'react'
import {
  View,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  Modal,
  Button
} from 'react-native'
import AppFlatList from '../AppFlatList'
import AppIcon from '../AppIcon'
import AppPickerItem from '../AppPickerItem'
import AppText from '../AppText'
import CONSTS from './consts'
import styles from './styles'

function AppPicker({
  icon = CONSTS.HAS_ICON,
  style,
  placeholder = CONSTS.PLACEHOLDER,
  options = CONSTS.OPTIONS,
  optionValue = CONSTS.OPTION_VALUE,
  optionLabel = CONSTS.OPTION_LABEL,
  onChange,
  onModalClose,
  selectedItem,
  // AppIcon
  iconName = CONSTS.ICON_NAME,
  iconColor = CONSTS.ICON_COLOR,
  iconSize = CONSTS.ICON_SIZE
}: any) {
  const findOptionLabelByValue = useCallback((options: any[], value: any) => {
    const index = options.findIndex((item: any) => {
      return item[optionValue] === selectedItem
    })
    return index !== -1 ? options[index][optionLabel] : ''
  }, [])
  const handlePress = useCallback((e?: GestureResponderEvent) => {
    setOpen(!open)
  }, [])
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<any>(selectedItem)
  const [label, setLabel] = useState<string>(
    findOptionLabelByValue(options, value) || placeholder
  )
  const handleFlatListItemPress = useCallback((item) => {
    const val = item[optionValue]
    const label = item[optionLabel]
    setValue(val)
    setLabel(label)
    setOpen(false)
    handleModalClose()
    typeof onChange === 'function' && onChange(val)
  }, [])
  const handleModalClose = useCallback(() => {
    typeof onModalClose === 'function' && onModalClose()
  }, [])
  const isPlaceholder = label === placeholder
  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[style, styles.container]}>
          {icon && (
            <AppIcon
              name={iconName}
              color={iconColor}
              size={iconSize}
              style={styles.icon}
            />
          )}
          <AppText style={[styles.label, isPlaceholder && styles.placeholder]}>
            {label}
          </AppText>
          <AppIcon name="chevron-down" color={iconColor} size={iconSize} />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={open}
        // transparent={true}
        animationType="slide"
        onRequestClose={() => {
          setOpen(!open)
        }}
      >
        <Button
          title="Close"
          onPress={() => {
            setOpen(false)
            handleModalClose()
          }}
        ></Button>
        <AppFlatList
          data={options}
          keyExtractor={(item) => item[optionValue].toString()}
          renderItem={({ item }) => {
            return (
              <AppPickerItem
                selected={value === item[optionValue]}
                label={item[optionLabel]}
                onPress={() => {
                  handleFlatListItemPress(item)
                }}
              />
            )
          }}
        />
      </Modal>
    </>
  )
}

export default AppPicker
