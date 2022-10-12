const Router = require('./../framework/Router')
const {getUsers, postUsers} = require("../controllers/userController");
const router = new Router()

router.get('/users', getUsers)
router.post('/users', postUsers)

module.exports = router