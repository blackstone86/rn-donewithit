import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import AppImageInput from '../components/AppImageInput'
import AppSafeAreaView from '../components/AppSafeAreaView'
type ImagePickerScreenProps = {}

function ImageInputScreen(props: ImagePickerScreenProps) {
  const handleChange = useCallback((values?: string[]) => {
    console.log(values)
  }, [])

  return (
    <AppSafeAreaView>
      <AppImageInput onChange={handleChange} />
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default ImageInputScreen
