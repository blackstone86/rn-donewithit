import { Image, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import AppText from '../../components/AppText'
import styles from './styles'
import { MOSH } from '../../config/images'
import useApi from '../../hooks/useApi'
import { listingApi } from '../../api'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import AppRetryView from '../../components/AppRetryView'

export default function ListingDetailsScreen({
  route: {
    params: { id }
  }
}: any) {
  const {
    data: listing,
    error,
    loading,
    request: setData
  } = useApi(listingApi.getListing, (data: any) => {
    // userId: 2,
    // location: {
    //   latitude: 37.78825,
    //   longitude: -122.4324
    // }
    return {
      ...data,
      subTitle: `$${data.price}`,
      imageUrl: data.images[0].url,
      avatarImage: MOSH,
      name: 'Mosh Hamedani',
      listings: 5
    }
  })
  useEffect(() => {
    setData(id)
  }, [])
  const { title, subTitle, imageUrl, avatarImage, name, listings } =
    listing || {}

  return (
    <>
      {loading && <AppActivityIndicator visible loop />}
      {error && (
        <AppRetryView
          title="Couldn't retrieve the listing"
          handleRetry={setData}
        />
      )}
      {!loading && !error && (
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <View style={styles.infoBox}>
              <AppText style={[styles.text, styles.title]}>{title}</AppText>
              {subTitle && (
                <AppText style={[styles.text, styles.subTitle]}>
                  {subTitle}
                </AppText>
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
      )}
    </>
  )
}
