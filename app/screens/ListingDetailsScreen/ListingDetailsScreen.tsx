import { Image, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import AppText from '../../components/AppText'
import styles from './styles'
import { MOSH } from '../../config/images'
import useApi from '../../hooks/useApi'
import { listingApi } from '../../api'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import AppRetryView from '../../components/AppRetryView'
import AppImage from '../../components/AppImage'

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
    const image = data.images[0]
    return {
      ...data,
      subTitle: `$${data.price}`,
      imageUrl: image?.url,
      thumbnailUrl: image?.thumbnailUrl,
      avatarImage: MOSH,
      name: 'Mosh Hamedani',
      listings: 5
    }
  })
  useEffect(() => {
    setData(id)
  }, [])
  const {
    title,
    subTitle,
    imageUrl,
    thumbnailUrl,
    avatarImage,
    name,
    listings
  } = listing || {}

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
            <AppImage
              style={styles.image}
              imageUrl={imageUrl}
              thumbnailUrl={thumbnailUrl}
            />
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
