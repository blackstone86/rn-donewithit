import ScreenType from '../../navigators/screenTypes'

export type menuType = {
  iconName: any
  iconBackgroundColor: string
  title: string
  targetScreen: ScreenType
}

export type infoType = {
  name: string
  email: string
  image: any
  menus: menuType[]
}
