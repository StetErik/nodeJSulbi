require('dotenv').config()
const App = require('./framework/App')
const jsonParser = require('./framework/jsonParser')
const userRouter = require('./src/userRouter')
const PORT = process.env.PORT || 3000
const app = new App()

app.use(jsonParser)
app.addRouter(userRouter)
app.listen(PORT, () => console.log('Server has been created on PORT:' + PORT))