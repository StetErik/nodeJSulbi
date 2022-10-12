const http = require('http')
const EventEmitter = require('events')
const parseBody = require('./parseBody')

module.exports = class App {
  constructor(){
    this.server = this._createServer()
    this.emitter = new EventEmitter()
    this.middlewares = []
  }
  use(middleware){
    this.middlewares.push(middleware)
  }
  listen(PORT, cb){
    this.server.listen(PORT, cb)
  }
  addRouter(router){
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path]
      Object.keys(endpoint).forEach(method => {
        const handler = endpoint[method]
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res)
        })
      })
    })
  }
  _createServer() {
    return http.createServer(async (req, res) => {
      try {
        await parseBody(req)
        this.middlewares.forEach(middleware => middleware(req, res))
        const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
        if(!emitted) {
          res.send('Error page')
        }
      } catch (err){
        res.end(err)
      }
    })
  }
  _getRouteMask(path, method){
    return `[${path}]:[${method}]`
  }
}