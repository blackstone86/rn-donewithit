import Joi from 'joi'

export default (schema) => (req, res, next) => {
  // const result = Joi.validate(req.body, schema)
  const result = schema.validate(req.body)

  if (result.error)
    return res.status(400).send({ error: result.error.details[0].message })

  next()
}
