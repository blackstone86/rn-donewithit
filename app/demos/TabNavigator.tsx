import React, { ReactNode } from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppText from '../components/AppText'
import AppIcon from '../components/AppIcon'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import AppButton from '../components/AppButton'
import { StyleProp, ViewStyle, StyleSheet } from 'react-native'
import COLORS from '../config/colors'
const Tab = createBottomTabNavigator()
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
function TabBarIcon({ color, size }: any, iconName: string): ReactNode {
  return <AppIcon name={iconName} color={color} size={size} />
}
const navigatorScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.PRIMARY
  },
  headerTintColor: COLORS.WHITE,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerTitleAlign: 'center',
  tabBarActiveTintColor: COLORS.PRIMARY
  // headerShown: false
}

function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN.Tweets}
      screenOptions={navigatorScreenOptions}
    >
      <Tab.Screen
        name={SCREEN.Tweets}
        component={Tweets}
        options={() => ({
          tabBarLabel: SCREEN.Tweets,
          tabBarIcon: (props): ReactNode => {
            return TabBarIcon(props, 'home')
          }
        })}
      />
      <Tab.Screen
        name={SCREEN.TweetDetails}
        component={TweetDetails}
        options={({ route: { params } }: any) => ({
          tabBarLabel: `detail${params?.id}`,
          tabBarIcon: (props): ReactNode => {
            return TabBarIcon(props, 'cards-outline')
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
        <Navigator />
      </NavigationContainer>
    </AppSafeAreaView>
  )
}

export default NativeStackScreen
