import { Image, View } from 'react-native'
import React, { useMemo } from 'react'
import AppText from '../../components/AppText'
import styles from './styles'

export default function ListingDetailsScreen() {
  const { title, subTitle, image, avatarImage, name, listings } = useMemo(
    () => ({
      title: 'Red jacket for sale',
      subTitle: '$100',
      image: require('../../assets/materials/jacket.jpg'),
      avatarImage: require('../../assets/materials/mosh.jpg'),
      name: 'Mosh Hamedani',
      listings: 5
    }),
    []
  )

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoBox}>
        <AppText style={[styles.text, styles.title]}>{title}</AppText>
        {subTitle && (
          <AppText style={[styles.text, styles.subTitle]}>{subTitle}</AppText>
        )}
      </View>
      <View style={styles.sellerBox}>
        <Image style={styles.avatar} source={avatarImage} />
        <View>
          <AppText style={styles.sellerText}>{name}</AppText>
          <AppText
            style={[styles.sellerText, styles.total]}
          >{`${listings} Listings`}</AppText>
        </View>
      </View>
    </View>
  )
}
