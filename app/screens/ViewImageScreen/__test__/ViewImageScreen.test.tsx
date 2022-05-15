import React from 'react'
import renderer from 'react-test-renderer'
import ViewImageScreen from '../index'

describe('ViewImageScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ViewImageScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
