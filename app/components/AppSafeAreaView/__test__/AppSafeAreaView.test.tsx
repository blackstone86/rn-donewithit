import React from 'react'
import { StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import AppSafeAreaView from '../index'

const customStyles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
})

const props = {
  style: customStyles.container
}

describe('AppSafeAreaView', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppSafeAreaView {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
