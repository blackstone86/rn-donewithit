import client from './client'

const auth = '/auth'

// 登录鉴权
const login = (data: any) => client.post(auth, data)

export default {
  login
}
