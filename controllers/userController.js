const User = require('./../models/userModel')

const getUsers = async (req, res) => {
  let data;
  const id = req.params.id
  if (id) data = await User.findById(id)
  else data = await User.find()
  res.send(data)
}

const postUsers = async (req, res) => {
  const user = req.body
  const data = await User.create(user)
  res.send(data)
}

module.exports = {
  getUsers, postUsers
}