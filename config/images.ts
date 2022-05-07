// const assets = '../assets'
// const materials = `${assets}/materials`
// const defFileNameSuffix = 'jpg'

// function getPath(imageName: string, directory = materials) {
//   const hasSuffix = imageName.toString().trim().indexOf('.') !== -1
//   const fileName = hasSuffix ? imageName : `${imageName}.${defFileNameSuffix}`
//   return `${directory}/${fileName}`
// }

const BACKGROUND = require('../assets/materials/background.jpg')
const CHAIR = require('../assets/materials/chair.jpg')
const COUCH = require('../assets/materials/couch.jpg')
const JACKET = require('../assets/materials/jacket.jpg')
const LOGO_RED = require('../assets/materials/logo-red.png')
const MOSH = require('../assets/materials/mosh.jpg')

export { BACKGROUND, CHAIR, COUCH, JACKET, LOGO_RED, MOSH }
