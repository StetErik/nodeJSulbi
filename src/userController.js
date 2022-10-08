const User = require('./../models/userModel')

const getPosts = async (req, res) => {
  const id = req.params.id
  let data = ''
  if(id) data = await User.findById(id)
  else data = await User.find()
  res.send(data)
}

const createPost = async (req, res) => {
  const user = await User.create(req.body)
  res.send(user)
}
module.exports = { getPosts, createPost }