const http = require('http')
const EventEmitter = require('events')
const bodyParser = require('./bodyParser')

module.exports = class App {
  constructor(){
    this.server = this._createServer()
    this.emitter = new EventEmitter()
    this.middlewares = []
  }
  use(middleware){
    this.middlewares.push(middleware)
  }
  listen(port, callback){
    this.server.listen(port, callback)
  }
  addRouter(router){
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path]
      Object.keys(endpoint).forEach(method => {
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          const handler = endpoint[method]
          handler(req, res)
        })
      })
    })
  }
  _createServer(){
    return http.createServer((req, res) => {
      this.middlewares.forEach(middleware => middleware(req, res))
      bodyParser(req)
      const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
      if (!emitted) {
        res.end('Error Page')
      }
    })
  }
  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`
  }
}