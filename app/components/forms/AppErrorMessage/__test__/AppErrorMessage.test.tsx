import React from 'react'
import { StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import AppErrorMessage from '../index'

const customStyles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 16
  }
})

const props = {
  style: customStyles.errorMessage,
  errorMessage: 'Error: test error message'
}

describe('AppErrorMessage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppErrorMessage {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
