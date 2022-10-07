// createReadStream(..., {}), .on('data', (chunk) => {}), .on('error, open, end', (chunk) => {}), createWriteStream(...),
// writeStream.write.end.close.destroy.on('error')), .pipe

const fs = require('fs')
const path = require('path')

const readStr = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
const writeStr = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

readStr.on("data", (chunk) => {
  writeStr.write('\n Chunk Started \n')
  writeStr.write(chunk)
  writeStr.write('\n Chunk Ended \n')
})

readStr.on('open', () => console.log('Started reading stream'))
readStr.on('end', () => console.log('Ended reading stream'))
readStr.on('error', (err) => console.log('Yoyooyoyo', err.message))

// readStr.pipe(writeStr)