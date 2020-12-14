// Dependencies
const express = require('express')
const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
const users = express.Router()
const User = require('../models/user.js')



//ROUTES


// Create New User
// Checked and working in Postman
users.post('/', (req, res) => {
  console.log('Create user button clicked!');
//   // have bcrypt hash the password and overwrite user entry to pass into db
//   // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({ error: err })
    } else {
      const user = {
        id: createdUser._id,
        displayName: createdUser.displayName,
        email: createdUser.email,
        password: ''
      }
      res.status(200).send(user)
    }
  })
});

// Edit User
// Checked and working in Postman
users.put('/:id', (req, res) => {
//   // req.body.password = req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.findByIdAndUpdate(req.params.id, req.body, (err, userToUpdate) => {
    if (err) {
      res.status(400).json({ error: err.message })
    } else {
      User.findById(userToUpdate._id, (err, updatedUser) => {
        if (err) {
          res.status(400).json({ error: err.message })
        } else {
          res.status(200).json({ user: updatedUser })
        }
      })
    }
  }) 
})

// Delete User
// users.delete('/:id', (req, res) => {
//   User.findByIdAndRemove(userData.user.id, (err, deletedUser) => {
//     if (err) {
//       res.status(400).json({
//         error: err
//       })
//     } else {
//       res.status(200).json({
//         deletedUser
//       })
//     }
//   })
// })



module.exports = users;