import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
type ImagePickerScreenProps = {}

/**
1.不做任何许可选择，每次刷新应用或重新进入都会问用户
2.做了选择的，则不会重复问用户，如果做了否的选择，要重新进入问用户，需要整个expo go客户端关闭
3.在系统设置，应用选择permission许可项来修改项目
4.expo-permissions 已准备废弃，用expo-media-library, expo-location, expo-camera, etc...
{
  "canAskAgain": true,
  "expires": "never",
  "granted": true,
  "status": "granted",
}
 */
const requestMediaPermissions = async () => {
  // solution 1
  const { granted }: MediaLibrary.PermissionResponse =
    await MediaLibrary.requestPermissionsAsync()
  // solution 2
  // const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  if (!granted) alert('You Need to enable permission to access the library!')
}

function ImagePickerScreen(props: ImagePickerScreenProps) {
  const [status] = MediaLibrary.usePermissions()
  useEffect(() => {
    requestMediaPermissions()
  }, [])
  console.log(status)
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {}
})

export default ImagePickerScreen
