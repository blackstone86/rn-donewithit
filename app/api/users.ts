import client from './client'

const users = '/users'

// 注册用户
const addUser = (data: any) => client.post(users, data)

export default {
  addUser
}
