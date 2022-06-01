import client from './client'

const categories = '/categories' // 获取商品类型
const listing = '/listing'
const listings = '/listings' // 获取商品清单
const user = '/user'
const users = '/users' // 获取用户
const auth = '/auth'
const my = '/my'
const expoPushTokens = '/expoPushTokens'
const messages = '/messages' // 获取消息列表

const getListings = () => client.get(listings)

export default {
  getListings
}
