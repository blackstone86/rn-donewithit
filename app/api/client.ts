import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.31.94:9000/api'
})

export default apiClient
