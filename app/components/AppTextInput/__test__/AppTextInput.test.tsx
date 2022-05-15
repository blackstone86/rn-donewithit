import React from 'react'
import { StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import AppTextInput from '../index'

const customStyles = StyleSheet.create({
  textInput: {
    width: 180
  }
})

const props = {
  icon: false,
  placeholder: 'Price',
  keyboardType: 'numeric',
  textContentType: 'none',
  value: '999',
  style: customStyles.textInput
}

describe('AppTextInput', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppTextInput {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
