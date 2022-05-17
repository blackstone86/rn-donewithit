import React from 'react'
import logger from './app/utils/logger'

// import AccountScreen from './app/screens/AccountScreen'
// import ListingEditScreen from './app/screens/ListingEditScreen'
// import RegisterScreen from './app/screens/RegisterScreen'
// import ListingsScreen from './app/screens/ListingsScreen'
// import MessagesScreen from './app/screens/MessagesScreen'
// import LoginScreen from './app/screens/LoginScreen'
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
// import WelcomeScreen from './app/screens/WelcomeScreen'
// import ViewImageScreen from './app/screens/ViewImageScreen'

// import NativeStackScreen from './app/demos/NativeStackScreen'
import NativeStackParameters from './app/demos/NativeStackParameters'

logger.start()
logger.log(new Error('Testing Error message to bugsnag'))

/**
 * notice
 * 01.NativeStackScreen 堆栈式导航组件
 * 02.NativeStackParameters 堆栈式导航传参
 */
export default function App() {
  return <NativeStackParameters />
}
