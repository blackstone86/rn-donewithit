import client from './client'

const messages = '/messages'

type Message = {
  listingId: number
  message: string
}

// 获取消息列表
const getMessages = () => client.get(messages)

// 发送消息
const sendMessage = (message: Message) => client.post(messages, message)

export default {
  getMessages,
  sendMessage
}
