import React, { useCallback, useContext, useEffect, useState } from 'react'
import COLORS from '../../config/colors'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import AppAvatarBox from '../../components/AppAvatarBox'
import { AppFlatList, AppMenuItem } from '../../components/lists'
import { menuType, infoType } from './types'
import AppIcon from '../../components/AppIcon'
import ScreenType from '../../navigators/screenTypes'
import { JIM } from '../../config/images'
import useApi, { removeAuthTokenHeader } from '../../hooks/useApi'
import { userApi } from '../../api'
import styles from './styles'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import AppRetryView from '../../components/AppRetryView'
import ScreenName from '../../navigators/screenNames'
import { AuthContext } from '../../contexts'

const defaultMenus = [
  {
    iconName: 'format-list-bulleted',
    iconBackgroundColor: COLORS.PRIMARY,
    title: 'my listings',
    targetScreen: ScreenType.LISTING
  },
  {
    iconName: 'email',
    iconBackgroundColor: COLORS.SECONDARY,
    title: 'my messages',
    targetScreen: ScreenType.MESSAGES
  },
  {
    iconName: 'logout',
    iconBackgroundColor: COLORS.YELLOW,
    title: 'log out',
    targetScreen: ScreenType.AUTH
  }
]

const defaultInfo: infoType = {
  name: '',
  email: '',
  image: JIM,
  menus: defaultMenus
}

export default function AccountScreen({ navigation }: any) {
  // const {
  //   data,
  //   error,
  //   loading,
  //   request: setData
  // } = useApi(userApi.getUserDetail, (data: any) => ({
  //   ...defaultInfo,
  //   ...data
  // }))
  // const [info, setInfo] = useState<infoType>(defaultInfo)
  // useEffect(() => {
  //   setData() // 默认获取登录用户
  // }, [])
  // useEffect(() => {
  //   if (data) setInfo(data)
  // }, [data])

  const { user } = useContext(AuthContext)
  const info: infoType = {
    ...defaultInfo,
    ...user
  }

  const handlePress = useCallback(({ targetScreen }: menuType) => {
    let params = null
    switch (targetScreen) {
      case ScreenType.LISTING:
        params = {
          from: ScreenName.ACCOUNT_SCREEN
        }
        break
      case ScreenType.AUTH:
        removeAuthTokenHeader()
        return // 改由 NavigationContainer 控制切换 ScreenType.AUTH
      default:
        break
    }
    navigation.navigate(targetScreen as never, params)
  }, [])

  return (
    <AppSafeAreaView style={styles.container}>
      {/* {loading && <AppActivityIndicator visible loop />}
      {error && (
        <AppRetryView
          title="Couldn't retrieve the account information"
          handleRetry={setData}
        />
      )}
      {!loading && !error && (
        <> */}
      <AppAvatarBox
        style={styles.avatarBox}
        title={info.name}
        subTitle={info.email}
        image={info.image}
      />
      <AppFlatList
        data={info.menus}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => {
          const { iconName, iconBackgroundColor, title }: menuType = item
          const isLastItem = index === info.menus.length - 1
          return (
            <AppMenuItem
              style={isLastItem && styles.lastMenuItem}
              title={title}
              // iconName={iconName}
              IconComponent={<AppIcon name={iconName} />}
              iconBackgroundColor={iconBackgroundColor}
              onPress={() => {
                handlePress(item)
              }}
            />
          )
        }}
      />
      {/* </> */}
      {/* )} */}
    </AppSafeAreaView>
  )
}
