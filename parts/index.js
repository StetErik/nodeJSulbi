const http = require('http')

const PORT = process.env.PORT || 3000



const server = http.createServer((req, res) => {
  res.end(req.url)
})

server.listen(PORT, () => console.log('Server has been created on PORT:' + PORT))