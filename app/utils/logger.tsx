import Bugsnag, { NotifiableError } from '@bugsnag/expo'

const start = () => Bugsnag.start()

const log = (error: NotifiableError) => Bugsnag.notify(error) // send an error to bugsnag

export default { start, log }
