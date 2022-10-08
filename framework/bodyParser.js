module.exports = (req, res, emitter, routeMask) => {
  let body = ''
  req.on('data', (chunk) => {
    body += chunk
  })
  req.on('end', () => {
    if (body) {
      req.body = JSON.parse(body)
    }
    const emitted = emitter.emit(routeMask, req, res)
    if (!emitted) {
      req.end('Error Page')
    }
  })
}