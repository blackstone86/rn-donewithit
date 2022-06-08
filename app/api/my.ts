import client from './client'
import mime from 'mime'

const my = '/my'
const listings = `${my}/listings`

// 获取我的清单列表
const getListings = () => client.get(`${listings}`)

export default {
  getListings
}
