import React, { useEffect } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  View
} from 'react-native'
import AppText from '../../components/AppText'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import AppRetryView from '../../components/AppRetryView'
import AppImage from '../../components/AppImage'
import { AppForm as Form, Field, TypeKind } from '../../components/forms'
import useApi from '../../hooks/useApi'
import { launchLocalNotification } from '../../hooks/useNotification'
import { listingApi, messagesApi } from '../../api'
import Yup from '../../utils/yup'
import { MOSH } from '../../config/images'
import styles from './styles'

const defaultFields: Field[] = [
  {
    name: 'message',
    type: TypeKind.TEXT_INPUT,
    defaultValue: '',
    fieldProps: {
      icon: false,
      placeholder: 'Message',
      keyboardType: 'default',
      textContentType: 'none',
      multiline: true,
      numberOfLines: 3,
      maxLength: 255
    }
  },
  {
    type: TypeKind.SUBMIT,
    fieldProps: {
      title: 'contact seller'
    }
  }
]

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label('Description')
})

export default function ListingDetailsScreen({
  route: {
    params: { id }
  }
}: any) {
  const getListingApi = useApi(listingApi.getListing, (data: any) => {
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
  const sendMessageApi = useApi(messagesApi.sendMessage)

  useEffect(() => {
    getListingApi.request(id)
  }, [])

  const handleSubmit = async (formData: any) => {
    const data = { listingId: id, ...formData }
    const res = await sendMessageApi.request(data)
    if (!res.ok) return false
    Keyboard.dismiss()
    launchLocalNotification({ title: 'message sent successfully!' })
  }

  const {
    title,
    subTitle,
    imageUrl,
    thumbnailUrl,
    avatarImage,
    name,
    listings
  } = getListingApi?.data || {}

  const loading = getListingApi.loading || sendMessageApi.loading

  return (
    <>
      {loading && <AppActivityIndicator visible loop />}
      {getListingApi.error && (
        <AppRetryView
          title="Couldn't retrieve the listing"
          handleRetry={getListingApi.request}
        />
      )}
      {!getListingApi.loading && !getListingApi.error && (
        <ScrollView disableScrollViewPanResponder>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={0}>
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
              <Form
                style={styles.form}
                fields={defaultFields}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </>
  )
}
