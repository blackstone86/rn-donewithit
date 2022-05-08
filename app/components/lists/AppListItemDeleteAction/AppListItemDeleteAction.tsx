import React, { useCallback } from 'react'
import { View } from 'react-native'
import COLORS from '../../../config/colors'
import CONSTS from './consts'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { AppListItemDeleteActionProps } from './types'
import styles from './styles'

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

export default AppListItemDeleteAction
