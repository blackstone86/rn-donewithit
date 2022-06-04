import express from 'express'
import categoriesStore from '../store/categories'
const router = express.Router()

router.get('/', (req, res) => {
  const categories = categoriesStore.getCategories()
  res.send(categories)
})

export default router
