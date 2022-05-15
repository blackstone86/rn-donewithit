import React from 'react'
import { StyleSheet } from 'react-native'
import renderer from 'react-test-renderer'
import AppCard from '../index'
import { COUCH } from '../../../../config/images'

const customStyles = StyleSheet.create({
  appCard: {
    marginHorizontal: 10,
    marginTop: 20
  }
})

const props = {
  style: customStyles.appCard,
  title: 'Couch in great condition',
  subTitle: '$1000',
  image: COUCH
}

describe('AppCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppCard {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
