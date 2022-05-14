import React from 'react'
import renderer from 'react-test-renderer'
import { StyleSheet } from 'react-native'
import AppAvatarBox from '../index'
import COLORS from '../../../config/colors'
import { MOSH } from '../../../config/images'

const styles = StyleSheet.create({
  avatarBox: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 20,
    marginTop: 30,
    marginBottom: 40
  }
})

const props = {
  style: styles.avatarBox,
  title: 'Junwen Huang',
  subTitle: 'jimvinhuang@gmail.com',
  image: MOSH
}

describe('AppAvatarBox', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppAvatarBox {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
