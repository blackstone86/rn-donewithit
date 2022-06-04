import express from 'express'
import Joi from 'joi'
import usersStore from '../store/users'
import auth from '../middleware/auth'
import validateWith from '../middleware/validation'

const router = express.Router()

router.post(
  '/',
  [auth, validateWith({ token: Joi.string().required() })],
  (req, res) => {
    const user: any = usersStore.getUserById(req.user.userId)
    if (!user) return res.status(400).send({ error: 'Invalid user.' })

    user.expoPushToken = req.body.token
    console.log('User registered for notifications: ', user)
    res.status(201).send()
  }
)

export default router
