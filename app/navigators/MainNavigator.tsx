import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppIcon from '../components/AppIcon'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountScreen from '../screens/AccountScreen'
import AppTabBarButton from '../components/AppTabBarButton'
import COLORS from '../config/colors'
import { useNavigation } from '@react-navigation/native'
import ScreenType from '../navigators/screenTypes'
import FeedNavigator from './FeedNavigator'
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY,
        headerShown: false
      }}
    >
      <Tab.Screen
        name={ScreenType.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="home" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name={ScreenType.POST}
        component={ListingEditScreen}
        options={{
          tabBarButton: () => {
            return (
              <AppTabBarButton
                onPress={() => {
                  navigation.navigate(ScreenType.POST as never)
                }}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name={ScreenType.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="account" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
