require('dotenv').config()
const Router = require('./framework/Router')
const App = require('./framework/App')
const PORT = process.env.PORT || 3000
const router = new Router()
const app = new App()

router.get('/users', (req, res) => {
  res.end('Users page')
})
router.get('/posts', (req, res) => {
  res.end('Posts page')
})

app.addRouter(router)
app.listen(PORT, () => console.log('Server has been created on PORT:' + PORT))