import React from 'react'
import renderer from 'react-test-renderer'
import ListingEditScreen from '../index'

describe('ListingEditScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListingEditScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
