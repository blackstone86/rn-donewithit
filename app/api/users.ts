import client from './client'

const users = '/users'

// 注册用户
const regist = (data: any) => client.post(users, data)

export default {
  regist
}
