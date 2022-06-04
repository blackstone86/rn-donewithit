import config from 'config'

export default async (req, res, next) => {
  setTimeout(() => next(), config.get('delay'))
}
