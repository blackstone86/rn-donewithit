import client from './client'

const user = '/user'

// 获取用户信息
const getUserDetail = (userId: number) => client.get(`${user}/${userId}`)

export default {
  getUserDetail
}
