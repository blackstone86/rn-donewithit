import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppIcon from '../components/AppIcon'
import ListingEditScreen from '../screens/ListingEditScreen'
import AppTabBarButton from '../components/AppTabBarButton'
import COLORS from '../config/colors'
import ScreenType from '../navigators/screenTypes'
import FeedNavigator from './FeedNavigator'
import MyNavigator from '../navigators/MyNavigator'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: COLORS.PRIMARY,
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
        options={({ navigation }) => ({
          tabBarButton: () => {
            return (
              <AppTabBarButton
                onPress={() => {
                  navigation.navigate(ScreenType.POST as never)
                }}
              />
            )
          }
        })}
      />
      <Tab.Screen
        name={ScreenType.MY}
        component={MyNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AppIcon name="account" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
