import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import logger from './app/utils/logger'
// import getCurrentSettings from './app/config/settings'
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
// import NativeStackParameters from './app/demos/NativeStackParameters'
// import NativeStackCustomHeaders from './app/demos/NativeStackCustomHeaders'
// import TabNavigator from './app/demos/TabNavigator'
// import NestTabNavigator from './app/demos/NestTabNavigator'
import Exercise01 from './app/demos/Exercise01'

logger.start()
// const settings = getCurrentSettings()
// console.log(settings)
// logger.log(new Error('Testing Error message to bugsnag'))

/**
 * notice
 * 01.NativeStackScreen 堆栈式导航组件
 * 02.NativeStackParameters 堆栈式导航传参
 * 03.NativeStackCustomHeaders 自定义页头样式
 * 04.TabNavigator 底部导航栏
 * 05.TabNavigator 嵌套底部导航栏
 * 06.Exercise01 串联各页面
 */
export default function App() {
  return (
    <Provider store={store}>
      <Exercise01 />
    </Provider>
  )
}
