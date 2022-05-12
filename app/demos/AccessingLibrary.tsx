import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import AppButton from '../components/AppButton'
import AppSafeAreaView from '../components/AppSafeAreaView'
type ImagePickerScreenProps = {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10
  },
  button: {
    marginTop: 100,
    marginBottom: 20,
    marginHorizontal: 10,
    width: '100%'
  },
  image: {
    width: 200,
    height: 200
  }
})

const requestMediaPermissions = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  if (!granted) alert('You Need to enable permission to access the library!')
}

function ImagePickerScreen(props: ImagePickerScreenProps) {
  const [imgUri, setImgUri] = useState<string>('')
  useEffect(() => {
    requestMediaPermissions()
  }, [])
  const handlePress = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      /**
        - result 类型 ImageInfo | ImagePickerCancelledResult
          1.ImageInfo
          Object {
            "cancelled": false,
            "height": 640,
            "type": "image",
            "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540junwenhuang%252FDoneWithIt/ImagePicker/f681ea80-624b-44a1-849c-5f0fe0f8fb5f.jpg",
            "width": 640,
          }
          2.ImagePickerCancelledResult
          Object {
            "cancelled": true,
          }
        - Image组件 source 类型 https://reactnative.dev/docs/image#imagesource
       */
      if (!result.cancelled) setImgUri(result.uri)
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }, [])
  const touched = !!imgUri
  return (
    <AppSafeAreaView>
      <View style={styles.container}>
        <AppButton
          style={styles.button}
          title="Select Image"
          onPress={handlePress}
        />
        {touched && (
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: imgUri }}
          />
        )}
      </View>
    </AppSafeAreaView>
  )
}

export default ImagePickerScreen
