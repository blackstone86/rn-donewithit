import React from 'react'
import renderer from 'react-test-renderer'
import ListingDetailsScreen from '../index'

describe('ListingDetailsScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListingDetailsScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
