import React from 'react'
import renderer from 'react-test-renderer'
import { StyleSheet } from 'react-native'
import AppButton from '../index'

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginBottom: 10
  }
})

const props = {
  style: styles.button,
  title: 'Click'
}

describe('AppButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppButton {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
