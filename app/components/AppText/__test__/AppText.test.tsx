import React from 'react'
import { StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import AppText from '../index'

const customStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'red'
  }
})

const props = {
  children: 'Hello world',
  style: customStyles.text
}

describe('AppText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppText {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
