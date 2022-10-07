require('dotenv').config()
const http = require('http')
const EventEmitter = require('events')

const emitter = new EventEmitter()

const PORT = process.env.PORT || 3000

class Router {
  constructor(){
    this.endpoints = {}
  }
  request(method = 'GET', path, handler){
    if(!this.endpoints[path]){
      this.endpoints[path] = {}
    }
    const endpoint = this.endpoints[path]
    if(endpoint[method]){
      throw new Error(`This ${method} in ${endpoint} already exists`)
    }
    endpoint[method] = handler
    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res)
    })
  }
  get(path, handler){
    this.request('GET', path, handler)
  }
  post(path, handler){
    this.request('POST', path, handler)
  }
  put(path, handler){
    this.request('PUT', path, handler)
  }
  delete(path, handler){
    this.request('DELETE', path, handler)
  }
}

const router = new Router()

router.get('/users', (req, res) => {
  res.end('Users page')
})
router.get('/posts', (req, res) => {
  res.end('Posts page')
})

const server = http.createServer((req, res) => {
  const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
  if(!emitted){
    res.end('Error Page')
  }
})

server.listen(PORT, () => console.log('Server has been created on PORT:' + PORT))