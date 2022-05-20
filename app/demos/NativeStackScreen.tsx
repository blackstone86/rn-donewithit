import React from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppButton from '../components/AppButton'
import { StyleProp, ViewStyle, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()
const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 20,
    marginBottom: 10
  }
})
type LinkType = {
  title?: string
  targetScreenName?: any
  style?: StyleProp<ViewStyle>
}
enum SCREEN {
  Tweets = 'Tweets',
  TweetDetails = 'TweetDetails',
  TweetInfos = 'TweetInfos'
}
function Link({
  title = 'Click',
  targetScreenName = SCREEN.Tweets,
  style
}: LinkType) {
  const navigation = useNavigation()
  return (
    <AppButton
      style={style}
      title={title}
      onPress={() => {
        navigation.navigate(targetScreenName)
      }}
    />
  )
}

function Tweets({ navigation }: any) {
  return (
    <AppSafeAreaView>
      <AppText style={styles.text}>{SCREEN.Tweets}</AppText>
      <AppButton
        style={styles.button}
        title={SCREEN.TweetDetails}
        onPress={() => {
          navigation.navigate(SCREEN.TweetDetails)
          // navigation.navigate(SCREEN.Tweets) // 在当前页不动
          // navigation.push(SCREEN.Tweets) // 堆栈新增一个实例
        }}
      />
      <Link
        style={styles.button}
        title={SCREEN.TweetInfos}
        targetScreenName={SCREEN.TweetInfos}
      />
    </AppSafeAreaView>
  )
}

function TweetDetails({ navigation }: any) {
  return (
    <AppSafeAreaView>
      <AppText style={styles.text}>{SCREEN.TweetDetails}</AppText>
      <AppButton
        style={styles.button}
        title={SCREEN.Tweets}
        onPress={() => {
          navigation.navigate(SCREEN.Tweets)
        }}
      />
    </AppSafeAreaView>
  )
}

function TweetInfos({ navigation }: any) {
  return (
    <AppSafeAreaView>
      <AppText style={styles.text}>{SCREEN.TweetInfos}</AppText>
    </AppSafeAreaView>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={SCREEN.Tweets}>
      <Stack.Screen name={SCREEN.Tweets} component={Tweets} />
      <Stack.Screen name={SCREEN.TweetDetails} component={TweetDetails} />
      <Stack.Screen name={SCREEN.TweetInfos} component={TweetInfos} />
    </Stack.Navigator>
  )
}

function NativeStackScreen() {
  return (
    <AppSafeAreaView>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppSafeAreaView>
  )
}

export default NativeStackScreen
