const Router = require('./../framework/Router')

const router = new Router()

const users = [
  {id: 1, name: 'Stet'},
  {id: 2, name: 'Erik'}
]

router.get('/users', (req, res) => {
  res.send(users)
})

router.post('/users', (req, res) => {
  const user = req.body
  user['id'] = Date.now()
  users.push(user)
  res.send(user)
})

module.exports = router