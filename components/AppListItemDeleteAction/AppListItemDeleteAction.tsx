import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { AppListItemDeleteActionProps } from './types'

function AppListItemDeleteAction({ onDelete }: AppListItemDeleteActionProps) {
  const handlePress = useCallback(() => {
    typeof onDelete === 'function' && onDelete()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={CONSTS.ICON_SIZE}
          color={COLORS.WHITE}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DANGER
  }
})

export default AppListItemDeleteAction
