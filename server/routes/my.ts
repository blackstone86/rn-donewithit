import express from 'express'
import listingsStore from '../store/listings'
import auth from '../middleware/auth'
import listingMapper from '../mappers/listings'

const router = express.Router()

router.get('/listings', auth, (req: any, res) => {
  const listings = listingsStore.filterListings(
    (listing) => listing.userId === req.user.userId
  )
  const resources = listings.map(listingMapper)
  res.send(resources)
})

export default router
