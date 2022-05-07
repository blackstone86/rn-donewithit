import React from 'react'
import { FlatList, View, StyleSheet, FlatListProps } from 'react-native'
import COLORS from '../../../config/colors'

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.LIGHT_GRAY
  }
})

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
