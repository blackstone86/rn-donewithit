import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'
import CONSTS from './consts'
import { AppFlatListProps } from './types'

function FlatListItemSeparator(hasItemSeparator: boolean) {
  return hasItemSeparator ? <View style={styles.separator} /> : null
}

function AppFlatList({
  ItemSeparatorComponent,
  hasItemSeparator = CONSTS.HAS_ITEM_SEPARATOR,
  ...otherProps
}: AppFlatListProps) {
  return (
    <FlatList
      ItemSeparatorComponent={() => {
        return FlatListItemSeparator(hasItemSeparator)
      }}
      {...otherProps}
    ></FlatList>
  )
}

export default AppFlatList
