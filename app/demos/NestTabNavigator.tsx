import React, { ReactNode } from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'
import AppIcon from '../components/AppIcon'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppButton from '../components/AppButton'
import { StyleProp, ViewStyle, StyleSheet } from 'react-native'
import COLORS from '../config/colors'
const Tab = createBottomTabNavigator()
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
  TweetDetails = 'TweetDetails',
  Account = 'Account'
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
function Account() {
  return (
    <AppSafeAreaView>
      <AppText style={styles.text}>{SCREEN.Account}</AppText>
    </AppSafeAreaView>
  )
}
function TabBarIcon(iconName: string, { color, size }: any): ReactNode {
  // color base on tabBarActiveTintColor/tabBarInactiveTintColor
  return <AppIcon name={iconName} color={color} size={size} />
}
const navigatorScreenOptions: BottomTabNavigationOptions = {
  // screen header common styles
  headerStyle: {
    backgroundColor: COLORS.PRIMARY
  },
  headerTintColor: COLORS.WHITE,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerTitleAlign: 'center',
  // tabBar styles
  tabBarActiveTintColor: COLORS.WHITE,
  tabBarActiveBackgroundColor: COLORS.PRIMARY,
  tabBarInactiveTintColor: COLORS.BLACK,
  tabBarInactiveBackgroundColor: COLORS.LIGHT_GRAY
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={SCREEN.Tweets}>
      <Stack.Screen name={SCREEN.Tweets} component={Tweets} />
      <Stack.Screen name={SCREEN.TweetDetails} component={TweetDetails} />
    </Stack.Navigator>
  )
}
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN.Tweets}
      screenOptions={navigatorScreenOptions}
    >
      <Tab.Screen
        name={SCREEN.Tweets}
        component={StackNavigator}
        options={() => ({
          tabBarLabel: SCREEN.Tweets,
          tabBarIcon: (props): ReactNode => {
            return TabBarIcon('home', props)
          }
        })}
      />
      <Tab.Screen
        name={SCREEN.Account}
        component={Account}
        options={() => ({
          tabBarLabel: SCREEN.Account,
          tabBarIcon: (props): ReactNode => {
            return TabBarIcon('account', props)
          }
        })}
      />
    </Tab.Navigator>
  )
}

function NativeStackScreen() {
  return (
    <AppSafeAreaView>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppSafeAreaView>
  )
}

export default NativeStackScreen
