import React from 'react'
import renderer from 'react-test-renderer'
import AppIcon from '../../../AppIcon'
import AppMenuItem from '../index'
import COLORS from '../../../../config/colors'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const menu = {
  iconName: 'format-list-bulleted',
  iconBackgroundColor: COLORS.PRIMARY,
  title: 'my listings'
}

describe('AppMenuItem', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AppMenuItem
          title={menu.title}
          IconComponent={<AppIcon name={menu.iconName} />}
          iconBackgroundColor={menu.iconBackgroundColor}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
