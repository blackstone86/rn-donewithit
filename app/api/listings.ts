import client from './client'
import mime from 'mime'

const categories = '/categories' // 获取商品类型
const listing = '/listing'
const user = '/user'
const users = '/users' // 获取用户
const auth = '/auth'
const my = '/my'
const expoPushTokens = '/expoPushTokens'
const messages = '/messages' // 获取消息列表
const listings = '/listings' // 获取商品清单

// 获取清单列表
const getListings = () => client.get(listings)

// 保存清单
const addListing = (
  { photos, title, price, category, description, location }: any,
  progressCb: (curProgress: number) => void
) => {
  const data = new FormData()
  photos.forEach((photo: any) => {
    const name = photo.split('/').pop()
    const suffix = photo.substr(photo.lastIndexOf('.') + 1)
    data.append('images', {
      name,
      type: mime.getType(suffix),
      uri: photo
    })
  })
  data.append('title', title)
  data.append('price', price)
  data.append('categoryId', category)
  data.append('description', description)
  if (location) data.append('location', JSON.stringify(location))
  return client.post(listings, data, {
    onUploadProgress: ({ loaded, total }: any) => {
      const curProgress = loaded / total
      progressCb(curProgress)
    }
  })
}

export default {
  getListings,
  addListing
}
