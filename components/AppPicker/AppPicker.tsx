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
  // AppIcon
  iconName = CONSTS.ICON_NAME,
  iconColor = CONSTS.ICON_COLOR,
  iconSize = CONSTS.ICON_SIZE
}: any) {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<any>()
  const [label, setLabel] = useState<string>(placeholder)

  const handlePress = useCallback((e?: GestureResponderEvent) => {
    setOpen(!open)
  }, [])
  const handleFlatListItemPress = useCallback((item) => {
    const val = item[optionValue]
    const label = item[optionLabel]
    setValue(val)
    setLabel(label)
    setOpen(false)
    typeof onChange === 'function' && onChange(val)
  }, [])
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
          <AppText style={styles.label}>{label}</AppText>
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
            setOpen(!open)
          }}
        ></Button>
        <AppFlatList
          data={options}
          keyExtractor={(item) => item[optionValue].toString()}
          renderItem={({ item, index, separators }) => {
            return (
              <AppText
                style={styles.flatListItem}
                onPress={() => {
                  handleFlatListItemPress(item)
                }}
              >
                {item[optionLabel]}
              </AppText>
            )
          }}
        />
      </Modal>
    </>
  )
}

export default AppPicker
