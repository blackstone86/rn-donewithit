import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  // const token = req.header('x-auth-token')
  // if (!token)
  //   return res.status(401).send({ error: 'Access denied. No token provided.' })

  // try {
  //   const payload = jwt.verify(token, 'jwtPrivateKey')
  //   req.user = payload
  //   next()
  // } catch (err) {
  //   res.status(400).send({ error: 'Invalid token.' })
  // }

  const user = {
    id: 1,
    name: 'Mosh',
    email: 'mosh@domain.com',
    password: '12345'
  }

  const token = { userId: user.id, name: user.name, email: user.email }

  try {
    req.user = token
    next()
  } catch (err) {
    res.status(400).send({ error: 'Invalid token.' })
  }
}
