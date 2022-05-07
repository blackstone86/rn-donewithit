import React from 'react'
import { FlatList, View, FlatListProps } from 'react-native'
import styles from './styles'

function FlatListItemSeparator() {
  return <View style={styles.separator} />
}

function AppFlatList({
  ItemSeparatorComponent,
  ...otherProps
}: FlatListProps<any>) {
  return (
    <FlatList
      ItemSeparatorComponent={FlatListItemSeparator}
      {...otherProps}
    ></FlatList>
  )
}

export default AppFlatList
