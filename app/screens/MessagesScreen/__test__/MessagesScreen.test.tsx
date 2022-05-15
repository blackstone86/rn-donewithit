import React from 'react'
import renderer from 'react-test-renderer'
import MessagesScreen from '../index'

describe('MessagesScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MessagesScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
