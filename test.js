// Process ***********************************

// const process = require('process')
// require('dotenv').config()
//
// console.log(process.pid)
// console.log(process.arch)
// console.log(process.argv)
// // console.log(process.exit())
//
// const MESSAGE = process.env.MESSAGE || ''
// const PORT = process.env.PORT || 3000
//
// if(MESSAGE) console.log(MESSAGE)
// else console.log('There is no message, but PORT is ' + PORT)

// Path **************************************

// const path = require('path')
//
// console.log(path.join('first', 'second', 'index.js'))
// console.log(path.resolve(__dirname))
//
// const MY_URL = 'https://www.steterik.net/about-me?full=false&page=4'
//
// const NODE_URL = new URL(MY_URL)
//
// console.log(NODE_URL)

// File-System ******************************

// const path = require('path')
// const fs = require('fs')
//
// const writeDirAsync = (path) => new Promise((resolve, reject) => {
//   fs.mkdir(path, (err) => err ? reject(err.message) : resolve())
// })
// const writeFileAsync = (path, data) => new Promise((resolve, reject) => {
//   fs.writeFile(path, data, (err) => err ? reject(err.message) : resolve())
// })
// const appendFileAsync = (path, data) => new Promise((resolve, reject) => {
//   fs.appendFile(path, data, (err) => err ? reject(err.message) : resolve())
// })
// const readFileAsync = (path) => new Promise((resolve, reject) => {
//   fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
//     if(err) {
//       return reject(err.message)
//     }
//     resolve(data)
//   })
// })
// const rmDirAsync = (path) => new Promise((resolve, reject) => {
//   fs.rmdir(path, (err) => {
//     if(err){
//       return reject(err.message)
//     }
//     resolve()
//   })
// })
// const rmFileAsync = (path) => new Promise((resolve, reject) => {
//   fs.rm(path, (err) => {
//     if (err) {
//       return reject(err)
//     }
//     resolve()
//   })
// })
//
// writeDirAsync(path.resolve(__dirname, 'myFiles'))
//   .then(() => writeFileAsync(path.resolve(__dirname, 'myFiles/test1.txt'), 'Hello Stet Erik from Node JS! 123'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'myFiles/test1.txt'), ' Soon'))
//   .then(() => readFileAsync((path.resolve(__dirname, 'myFiles/test1.txt'))))
//   .then((data) => writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'The words count is: ' + data.split(' ').length))
//   .then(() => rmFileAsync(path.resolve(__dirname, 'myFiles/test1.txt')))
//   .then(() => rmDirAsync(path.resolve(__dirname, 'myFiles')))
//   .catch((err) => console.log(err))

// Operation system ************************************

// const os = require('os')
// const cluster = require('cluster')

// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.networkInterfaces())

// console.log(cluster.Worker)

// Events ******************************************

// const EventEmitter = require('events')
// const emitter = new EventEmitter()
//
// emitter.on('some_event', (message) => {
//   console.log(message)
// })
//
// emitter.emit('some_event', 'Hello Emitter')

// Stream *******************************************

// const fs = require('fs')
// const path = require('path')
//
// const writeStream = fs.createWriteStream('test2.txt')
// const readStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
// // for (let i = 0; i < 20; i++) {
// //   writeStream.write(i + '\n')
// // }
//
// readStream.pipe(writeStream)

// http ******************************************
// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.end('Hello')
// })
//
// server.listen(3003)