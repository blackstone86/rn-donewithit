import * as SecureStore from 'expo-secure-store'
import getCurrentSettings from '../config/settings'
import logger from './logger'

const { PREFIX } = getCurrentSettings()

const authStorage = {
  async setToken(token: string) {
    try {
      const rkey = PREFIX + 'token'
      console.log(token, 'settoken')
      await SecureStore.setItemAsync(rkey, token)
    } catch (err) {
      console.log('Error occurs when setting the token', err)
      logger.log(err)
    }
  },
  async getToken() {
    try {
      const rkey = PREFIX + 'token'
      const token = await SecureStore.getItemAsync(rkey)
      return token
    } catch (err) {
      console.log('Error occurs when getting the token', err)
      logger.log(err)
    }
  }
}

export default authStorage
