import client from './client'

const messages = '/messages'

// 获取消息列表
const getMessages = () => client.get(messages)

export default {
  getMessages
}
