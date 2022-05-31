import { StyleSheet } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import COLORS from '../../config/colors'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import AppAvatarBox from '../../components/AppAvatarBox'
import { AppFlatList, AppMenuItem } from '../../components/lists'
import { menuType } from './types'
import AppIcon from '../../components/AppIcon'
import ScreenType from '../../navigators/screenTypes'
import { MOSH } from '../../config/images'
import styles from './styles'

export default function AccountScreen({ navigation }: any) {
  const { name, email, image, menus } = useMemo(
    () => ({
      name: 'Mosh Hamedani',
      email: 'programmingwithmosh@gmail.com',
      image: MOSH,
      menus: [
        {
          iconName: 'format-list-bulleted',
          iconBackgroundColor: COLORS.PRIMARY,
          title: 'my listings',
          targetScreen: ScreenType.LISTINGS
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
    }),
    []
  )
  const handlePress = useCallback(({ targetScreen }: menuType) => {
    navigation.navigate(targetScreen as never)
  }, [])
  return (
    <AppSafeAreaView style={styles.container}>
      <AppAvatarBox
        style={styles.avatarBox}
        title={name}
        subTitle={email}
        image={image}
      />
      <AppFlatList
        data={menus}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => {
          const { iconName, iconBackgroundColor, title }: menuType = item
          const isLastItem = index === menus.length - 1
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
    </AppSafeAreaView>
  )
}
