import passwordMiddleware from './passwordMiddleware'
import softDeleteMiddleware from './softDeleteMiddleware'
import sluggifyMiddleware from './sluggifyMiddleware'
import fixImageUrlsMiddleware from './fixImageUrlsMiddleware'
import excerptMiddleware from './excerptMiddleware'

export default [
  passwordMiddleware,
  sluggifyMiddleware,
  excerptMiddleware,
  fixImageUrlsMiddleware,
  softDeleteMiddleware
]
