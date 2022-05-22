import { Image, ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import AppText from '../../components/AppText'
import styles from './styles'
import { JACKET, MOSH } from '../../config/images'

export default function ListingDetailsScreen({ route: { params } }: any) {
  const { title, subTitle, image, avatarImage, name, listings } = useMemo(
    () => ({
      title: params.title,
      subTitle: params.subTitle,
      image: params.image,
      avatarImage: MOSH,
      name: 'Mosh Hamedani',
      listings: 5
    }),
    []
  )

  return (
    <ScrollView>
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
    </ScrollView>
  )
}
