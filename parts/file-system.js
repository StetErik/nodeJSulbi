// fs, path, mkdirS('...', {recursive: true}), rmdir('...', (err) => {func}), writeFile(1, 2, 3), appendFile(),
// fsPromise, writeFileAsync, appendFileAsync, readFileAsync, rmFileAsync,

const fs = require('fs')
const path = require('path')

// fs.exists(path.resolve(__dirname, 'filesStet'), (exists) => {
//   if(exists){
//     console.log('File exists')
//     fs.rm(path.resolve(__dirname, 'filesStet/test.txt'), (err) => {
//       if(err){
//         console.log(err.message)
//       } else {
//         fs.rmdir(path.resolve(__dirname, 'filesStet'), (err) => {
//           if(err){
//             console.log('Folder hasn\'t been deleted! Because ==>', err.message)
//           } else {
//             console.log('Folder has been deleted')
//           }
//         })
//       }
//     })
//   } else {
//     console.log('File doesn\'t exist')
//     fs.mkdir(path.resolve((__dirname, 'filesStet')), (err) => {
//       if(err){
//         console.log('Folder hasn\'t created! Because ==>', err.message)
//       } else {
//         console.log('Folder has been created!')
//         fs.writeFile(path.resolve(__dirname, 'filesStet/test.txt'), 'qwertyuip sete', (err) => {
//           if(err) {
//             console.log(err.message)
//           } else {
//             console.log('File was created')
//           }
//         })
//       }
//     })
//   }
// })

const existsAsync = async (path) => new Promise((resolve, reject) => {
  fs.exists(path, (exists) => {
    if(exists) {
      return reject('File exists!')
    } else {
      resolve('File doesn\'t exists')
    }
  })
})

const mkDirAsync = async (path) => new Promise((resolve, reject) => {
  fs.mkdir(path, (err) => {
    if(err){
      return reject(err.message)
    } else {
      resolve('Folder was created')
    }
  })
})

const writeFileAsync = async (path, data) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, (err) => {
    if(err){
      return reject(err.message)
    } else {
      resolve('File has been created')
    }
  })
})

const appendFileAsync = async (path, data) => new Promise((resolve, reject) => {
  fs.appendFile(path, data, (err) => {
    if(err){
      return reject(err.message)
    } else {
      resolve('Text has been added')
    }
  })
})

const readFileAsync = async (path) => new Promise((resolve, reject) => {
  fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
    if(err) {
      return reject(err.message)
    } else {
      resolve(data)
    }
  })
})

existsAsync(path.resolve(__dirname, 'filesStet'))
  .then(data => console.log(1, data))
  .then(() => existsAsync(path.resolve(__dirname, 'filesStet/test.txt')))
  .then(data => console.log(2, data))
  .then(() => mkDirAsync(path.resolve(__dirname, 'filesStet')))
  .then(data => console.log(3, data))
  .then(() => writeFileAsync(path.resolve(__dirname, 'filesStet/test.txt'), 'Hello Stet Erik!'))
  .then(data => console.log(4, data))
  .then(() => appendFileAsync(path.resolve(__dirname, 'filesStet/test.txt'), ' Hello Stet Erik!'))
  .then(data => console.log(5, data))
  .then(() => readFileAsync(path.resolve(__dirname, 'filesStet/test.txt')))
  .then(data => data.split(' ').length.toString())
  .then(count => writeFileAsync(path.resolve(__dirname, 'filesStet/count.txt'), `Words length are ${count}`))
  .then(data => console.log(6, data))
  .then(() => fs.rm(path.resolve(__dirname, 'filesStet/test.txt'), () => {}))
  .catch((err) => console.log(err))
