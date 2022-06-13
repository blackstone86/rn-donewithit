import AsyncStorage from '@react-native-async-storage/async-storage'
import logger from './logger'
import moment from 'moment'

/**
 * imprement 3 features with asyncStorage:
 * 01.cache data
 * 02.apply timestamp
 * 03.autoMatically remove expired data
 */

const PREFIX = 'cache_'
const EXPIRED_IN_MINUTES = 5

const isExpired = (item: any) => {
  const now = moment(Date.now())
  const storedTime = moment(item.timestamp)
  return now.diff(storedTime, 'minutes') > EXPIRED_IN_MINUTES
}

const store = async (key: string, value: any) => {
  try {
    const rkey = PREFIX + key
    const item = {
      value,
      timestamp: Date.now()
    }
    await AsyncStorage.setItem(rkey, JSON.stringify(item))
  } catch (err) {
    logger.log(err)
  }
}

const get = async (key: string) => {
  try {
    const rkey = PREFIX + key
    const value: any = await AsyncStorage.getItem(rkey)
    const item = JSON.parse(value)

    if (!item) return null

    if (isExpired(item)) {
      await AsyncStorage.removeItem(rkey)
      return null
    }

    return item.value
  } catch (err) {
    logger.log(err)
  }
}

export default {
  store,
  get
}
