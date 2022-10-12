const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  pass: String
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)