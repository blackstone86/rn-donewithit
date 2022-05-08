import { FlatListProps } from 'react-native'

export type AppFlatListProps = FlatListProps<any> & {
  hasItemSeparator?: boolean
}
