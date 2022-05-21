import React from 'react'
import renderer from 'react-test-renderer'
import AppTabBarButton from '../index'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const props = {
  iconName: 'email',
  iconSize: 25,
  iconColor: 'red'
}

describe('AppTabBarButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppTabBarButton {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
