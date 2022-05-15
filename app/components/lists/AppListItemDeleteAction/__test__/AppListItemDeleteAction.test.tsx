import React from 'react'
import renderer from 'react-test-renderer'
import AppListItemDeleteAction from '../index'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

describe('AppListItemDeleteAction', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppListItemDeleteAction />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
