import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import AppImageInput from '../components/AppImageInput'
import AppSafeAreaView from '../components/AppSafeAreaView'
type ImagePickerScreenProps = {}

const styles = StyleSheet.create({
  container: {}
})

function ImageInputScreen(props: ImagePickerScreenProps) {
  const handleChange = useCallback((values?: string[]) => {
    console.log(values)
  }, [])

  return (
    <AppSafeAreaView>
      <AppImageInput onChange={handleChange} max={3} />
    </AppSafeAreaView>
  )
}

export default ImageInputScreen
