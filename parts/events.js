// emitter.once, emitter.removeAllListeners(), .removelistener('message', callback)

const EventEmitter = require('events')

const emitter = new EventEmitter()

const callback = (text, id) => {
  console.log(id, ':', text)
}

emitter.once('message', callback)

const TEXT = process.env.TEXT || ''

// emitter.removeAllListeners()
// emitter.removeListener('message', callback)

emitter.emit('message', TEXT, Date.now())
emitter.emit('message', TEXT, Date.now())
emitter.emit('message', TEXT, Date.now())
emitter.emit('message', TEXT, Date.now())

