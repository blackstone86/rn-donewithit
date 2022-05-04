import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppIconType } from './types'
import CONSTS from './consts'

function AppIcon({
  name = CONSTS.NAME,
  size = CONSTS.SIZE,
  color = CONSTS.COLOR
}: AppIconType) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />
}

export default AppIcon
