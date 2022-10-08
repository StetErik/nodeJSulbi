const Router = require('./../framework/Router')
const router = new Router()
const { getPosts, createPost } = require('./userController')

router.get('/users', getPosts)

router.post('/users', createPost)

module.exports = router