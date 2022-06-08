import client from './client'

const listing = '/listing'

// 获取清单项详情
const getListing = (id: number) => client.get(`${listing}/${id}`)

export default {
  getListing
}
