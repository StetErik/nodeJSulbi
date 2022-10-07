// join, __dirname, resolve, fullpath, parse, new URL(''),

const path = require('path')

// console.log('Path ==>', path.join(__dirname, 'first', 'second', 'third'))

// const FULL_PATH = path.resolve(__dirname, 'first', 'second', 'third.js')
// console.log(path.parse(FULL_PATH))

const MY_URL = 'https://www.steterik.com/about?id=1'

const url = new URL(MY_URL)

console.log(url)