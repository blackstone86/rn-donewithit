import express from 'express'
import store from '../store/listings'
import auth from '../middleware/auth'
import listingMapper from '../mappers/listings'

const router = express.Router()

router.get('/:id', auth, (req, res) => {
  const listing = store.getListing(Number(req.params.id))
  if (!listing) return res.status(404).send()
  const resource = listingMapper(listing)
  res.send(resource)
})

export default router
