import React, { useCallback, useState } from 'react'
import { StyleSheet, Switch, Text } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'

/**
 * 1.default position
 * android: right
 * ios: left
 */

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  }
})

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const handleValueChange = useCallback((value: boolean) => {
    setIsEnabled(value)
  }, [])
  return (
    <AppSafeAreaView style={styles.container}>
      <Switch value={isEnabled} onValueChange={handleValueChange} />
      <Text>{isEnabled}</Text>
    </AppSafeAreaView>
  )
}
