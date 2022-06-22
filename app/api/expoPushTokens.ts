import client from './client'

const expoPushTokens = '/expoPushTokens'

const addPushTokens = (pushToken: any) => client.post(expoPushTokens, pushToken)

export default {
  addPushTokens
}
