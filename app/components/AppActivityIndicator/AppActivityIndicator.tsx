import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import { LOADING } from '../../config/animations'
import styles from './styles'

function AppActivityIndicator({
  visible = false,
  autoPlay = true,
  loop = true,
  source = LOADING,
  size = 'small', // 'small' or 'large'
  ...rest
}: any) {
  return visible ? (
    <View style={styles.container}>
      <LottieView
        style={size === 'small' ? styles.smallSize : styles.largeSize}
        autoPlay={autoPlay}
        loop={loop}
        source={source}
        {...rest}
      />
    </View>
  ) : null
}

export default AppActivityIndicator
