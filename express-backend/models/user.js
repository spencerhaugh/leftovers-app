const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    // required: true
  },
  displayName: {
    type: String,
    required: true,
    unique: true
  },
  recipes: {
    type: [mongoose.Schema.Types.Mixed]
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User