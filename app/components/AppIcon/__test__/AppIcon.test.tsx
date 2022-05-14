import React from 'react'
import renderer from 'react-test-renderer'
import AppIcon from '../index'
import COLORS from '../../../config/colors'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const props = {
  name: 'camera',
  size: 20,
  color: COLORS.GRAY
}

describe('AppIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppIcon {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
