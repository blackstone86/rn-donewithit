import { View, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import AppAvatarBox from '../../components/AppAvatarBox'
import AppFlatList from '../../components/AppFlatList'
import AppText from '../../components/AppText'
const avatarImage = require('../../assets/materials/mosh.jpg')

type menuType = {
  iconName: any
  iconBackgroundColor: string
  title: string
}
export default function App() {
  const { name, email, image, menus } = useMemo(
    () => ({
      name: 'Mosh Hamedani',
      email: 'programmingwithmosh@gmail.com',
      image: avatarImage,
      menus: [
        {
          iconName: 'format-list-bulleted',
          iconBackgroundColor: COLORS.PRIMARY,
          title: 'My Listings'
        },
        {
          iconName: 'email',
          iconBackgroundColor: COLORS.SECONDARY,
          title: 'My Messages'
        },
        {
          iconName: 'logout',
          iconBackgroundColor: COLORS.YELLOW,
          title: 'Log out'
        }
      ]
    }),
    []
  )

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
        renderItem={({ item, index, separators }) => {
          const { iconName, iconBackgroundColor, title }: menuType = item
          return (
            <View
              style={[
                styles.menu,
                {
                  marginTop: index === menus.length - 1 ? 20 : 0
                }
              ]}
            >
              <View
                style={[
                  styles.menuIcon,
                  { backgroundColor: iconBackgroundColor }
                ]}
              >
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={COLORS.WHITE}
                />
              </View>
              <AppText style={styles.menuTitle}>{title}</AppText>
            </View>
          )
        }}
      />
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  avatarBox: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: CONSTS.PADDING,
    marginTop: 30,
    marginBottom: 40
  },
  menu: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  menuTitle: {
    fontSize: 18
  }
})
