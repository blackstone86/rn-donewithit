import React from 'react'
import renderer from 'react-test-renderer'
import AppPickerItem from '../index'
import COLORS from '../../../config/colors'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const option = {
  label: 'Furniture',
  iconName: 'lamp',
  iconBackgroundColor: COLORS.PRIMARY,
  value: 1
}

const props = {
  label: option.label,
  selected: true,
  data: option
}

describe('AppPickerItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppPickerItem {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
