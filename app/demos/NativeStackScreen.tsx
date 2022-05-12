import React from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

function Tweets() {
  return (
    <AppSafeAreaView>
      <AppText>Tweets</AppText>
    </AppSafeAreaView>
  )
}

function TweetDetails() {
  return (
    <AppSafeAreaView>
      <AppText>TweetDetails</AppText>
    </AppSafeAreaView>
  )
}

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  )
}

function NativeStackScreen(props: any) {
  return (
    <AppSafeAreaView>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AppSafeAreaView>
  )
}

export default NativeStackScreen
