import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  ActivityIndicator
} from 'react-native'
import Constants from 'expo-constants'
const STATUSBAR_HEIGHT = Constants.statusBarHeight

// IOS：View -> UIView 原生对象ssss
export default function App() {
  const handlePress = () => console.log('Text pressed')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native Hello React Native Hello React Native Hello React
        Native Hello React Native Hello React Native Hello React Native Hello
        React Native Hello React Native
      </Text>
      <Image style={styles.icon} source={require('./assets/icon.png')} />
      <Image
        blurRadius={10}
        fadeDuration={1000}
        loadingIndicatorSource={require('./assets/preview.gif')}
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/2000/3000'
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 200,
    height: 200
  }
})
