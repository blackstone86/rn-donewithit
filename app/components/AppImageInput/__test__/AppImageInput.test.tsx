import React from 'react'
import renderer from 'react-test-renderer'
import AppImageInput from '../index'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const props = {
  max: 10
}

describe('AppImageInput', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppImageInput {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
