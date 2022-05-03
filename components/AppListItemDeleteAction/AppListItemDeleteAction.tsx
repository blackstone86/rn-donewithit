import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function AppListItemDeleteAction(props: any) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can"
        size={CONSTS.ICON_SIZE}
        color={COLORS.WHITE}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DANGER
  }
})

export default AppListItemDeleteAction
