import React from 'react'
import renderer from 'react-test-renderer'
import AppListItem from '../index'
import { MOSH } from '../../../../config/images'
import { Animated, ImageSourcePropType, StyleSheet } from 'react-native'
import AppListItemDeleteAction from '../../AppListItemDeleteAction'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)
type Message = {
  id: number
  title: string
  description: string
  image: ImageSourcePropType
}
const msg: Message = {
  id: 1,
  title: 'Mosh Hamedani',
  description: 'Hey! Is this item still available?',
  image: MOSH
}

const handleRenderRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation,
  item: Message
): JSX.Element => {
  return (
    <AppListItemDeleteAction
      onDelete={() => {
        console.log(item.id)
      }}
    />
  )
}
const styles = StyleSheet.create({
  item: {
    padding: 20
  }
})

describe('AppListItem', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AppListItem
          style={styles.item}
          title={msg.title}
          subTitle={msg.description}
          image={msg.image}
          renderRightActions={(
            progress: Animated.AnimatedInterpolation,
            dragX: Animated.AnimatedInterpolation
          ) => {
            return handleRenderRightActions(progress, dragX, msg)
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
