require('dotenv').config()
const App = require('./framework/App')
const jsonParser = require('./framework/jsonParser')
const urlParser = require('./framework/urlParser')
const userRouter = require('./src/userRouter')
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000
const app = new App()
const DB_URL = 'mongodb+srv://steterik:123@cluster0.sg2lvbs.mongodb.net/?retryWrites=true&w=majority'

app.use(jsonParser)
app.use(urlParser('http://localhost:' + PORT))
app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('Server has been created on PORT:' + PORT))
  } catch (e) {
    console.log(e.message)
  }
}

start()
