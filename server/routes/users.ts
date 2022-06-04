import express from 'express'
import Joi from 'joi'
import usersStore from '../store/users'
import validateWith from '../middleware/validation'

const router = express.Router()

const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5)
}

router.post('/', validateWith(schema), (req, res) => {
  const { name, email, password } = req.body
  if (usersStore.getUserByEmail(email))
    return res
      .status(400)
      .send({ error: 'A user with the given email already exists.' })

  const user = { name, email, password }
  usersStore.addUser(user)

  res.status(201).send(user)
})

router.get('/', (req, res) => {
  res.send(usersStore.getUsers())
})

export default router
