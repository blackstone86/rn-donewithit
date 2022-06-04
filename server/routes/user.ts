import express from 'express'
import usersStore from '../store/users'
import listingsStore from '../store/listings'
import auth from '../middleware/auth'

const router = express.Router()

router.get('/:id', auth, (req, res) => {
  const userId = Number(req.params.id)
  const user = usersStore.getUserById(userId)
  if (!user) return res.status(404).send()

  const listings = listingsStore.filterListings(
    (listing) => listing.userId === userId
  )

  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    listings: listings.length
  })
})

export default router
