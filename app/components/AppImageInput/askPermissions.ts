import * as ImagePicker from 'expo-image-picker'

export const requestMediaPermissions = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  if (!granted) alert('You Need to enable permission to access the library!')
}
