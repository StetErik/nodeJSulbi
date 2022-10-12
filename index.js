const App = require('./framework/App')
const app = new App()
const router = require('./src/routerUser')
const parseJson = require('./framework/parseJson')
const parseURL = require('./framework/parseUrl')
const mongoose = require("mongoose");

app.use(parseJson)
app.use(parseURL('http://localhost:3000'))
app.addRouter(router)

async function start(){
  await mongoose.connect('mongodb+srv://steterik:123@cluster0.69ier4g.mongodb.net/?retryWrites=true&w=majority')
  app.listen(3000, () => {
    console.log('Server started on PORT: ' + 3000)
  })
}

start()