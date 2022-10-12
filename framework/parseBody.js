module.exports = (req) => new Promise((resolve, reject) => {
  let body = ''
  req.on('data', (chunk) => {
    body += chunk
  })
  req.on('end', (err) => {
    if(err) reject(err)
    if(body) {
      req.body = JSON.parse(body)
    }
    resolve()
  })
})