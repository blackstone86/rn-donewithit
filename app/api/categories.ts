import client from './client'

const categories = '/categories'

// 获取商品类型
const getCategories = () => client.get(categories)

export default {
  getCategories
}
