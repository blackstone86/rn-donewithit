import express from 'express'
import Joi from 'joi'
import { Expo } from 'expo-server-sdk'
import usersStore from '../store/users'
import listingsStore from '../store/listings'
import messagesStore from '../store/messages'
import sendPushNotification from '../utilities/pushNotifications'
import auth from '../middleware/auth'
import validateWith from '../middleware/validation'

const router = express.Router()

const schema = Joi.object({
  listingId: Joi.number().required(),
  message: Joi.string().required()
})

router.get('/', auth, (req: any, res) => {
  const messages = messagesStore.getMessagesForUser(req.user.userId)

  const mapUser = (userId) => {
    const user = usersStore.getUserById(userId)
    return { id: user.id, name: user.name }
  }

  const resources = messages.map((message) => ({
    id: message.id,
    listingId: message.listingId,
    dateTime: message.dateTime,
    content: message.content,
    fromUser: mapUser(message.fromUserId),
    toUser: mapUser(message.toUserId)
  }))

  res.send(resources)
})

router.post('/', [auth, validateWith(schema)], async (req, res) => {
  const { listingId, message } = req.body

  const listing = listingsStore.getListing(listingId)
  if (!listing) return res.status(400).send({ error: 'Invalid listingId.' })

  const targetUser: any = usersStore.getUserById(Number(listing.userId))
  if (!targetUser) return res.status(400).send({ error: 'Invalid userId.' })

  messagesStore.add({
    fromUserId: req.user.userId,
    toUserId: listing.userId,
    listingId,
    content: message
  })

  const { expoPushToken } = targetUser

  if (Expo.isExpoPushToken(expoPushToken))
    await sendPushNotification(expoPushToken, message)

  res.status(201).send()
})

export default router
