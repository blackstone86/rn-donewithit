import React from 'react'
import { View } from 'react-native'
import AppButton from '../AppButton'
import AppText from '../AppText'
import styles from './styles'

type AppRetryViewProps = {
  title?: string
  handleRetry?: () => void
}

function AppRetryView({
  title = "Couldn't retrieve the listings",
  handleRetry
}: AppRetryViewProps) {
  return (
    <View style={styles.infoBox}>
      <AppText style={styles.text}>{title}</AppText>
      <AppButton
        style={styles.retryButton}
        title="Retry"
        onPress={handleRetry}
      />
    </View>
  )
}

export default AppRetryView
