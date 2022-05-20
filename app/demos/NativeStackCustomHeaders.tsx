import React from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import AppButton from '../components/AppButton'
import { StyleProp, ViewStyle, StyleSheet } from 'react-native'
import COLORS from '../config/colors'

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
  params?: any
}
enum SCREEN {
  Tweets = 'Tweets',
  TweetDetails = 'TweetDetails'
}
function Link({
  title = 'Click',
  targetScreenName = SCREEN.Tweets,
  style,
  params
}: LinkType) {
  const navigation = useNavigation()
  return (
    <AppButton
      style={style}
      title={title}
      onPress={() => {
        navigation.navigate(targetScreenName as never, params as never)
      }}
    />
  )
}
function Tweets() {
  const params = { id: 1 }
  return (
    <AppSafeAreaView>
      <AppText style={styles.text}>{SCREEN.Tweets}</AppText>
      <Link
        style={styles.button}
        title={SCREEN.TweetDetails}
        targetScreenName={SCREEN.TweetDetails}
        params={params}
      />
    </AppSafeAreaView>
  )
}
function TweetDetails({ navigation, route: { params } }: any) {
  return (
    <AppSafeAreaView>
      <AppText style={styles.text}>
        {SCREEN.TweetDetails} {params?.id}
      </AppText>
      <Link
        style={styles.button}
        title={SCREEN.Tweets}
        targetScreenName={SCREEN.Tweets}
      />
    </AppSafeAreaView>
  )
}

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.PRIMARY
  },
  headerTintColor: COLORS.WHITE,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerTitleAlign: 'center'
  // headerShown: false
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN.Tweets}
      screenOptions={navigatorScreenOptions}
    >
      <Stack.Screen
        name={SCREEN.Tweets}
        component={Tweets}
        // https://reactnavigation.org/docs/native-stack-navigator/#headershown
        options={() => ({
          title: 'home'
        })}
      />
      <Stack.Screen
        name={SCREEN.TweetDetails}
        component={TweetDetails}
        // https://reactnavigation.org/docs/navigation-prop
        // https://reactnavigation.org/docs/route-prop
        options={({ route: { params } }: any) => ({
          title: `detail${params?.id}`
        })}
      />
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
