// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const users = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');


//CRUD ROUTES

// ============
// USERS
// ============

// Get Indivdual User
users.get('/:id', (req, res) => {
  console.log("Finding user...")
  User.findById(req.params.id, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message })
    } else {
      foundUser.password = ''
      res.status(200).json(foundUser)
    }}
  )});

// Create New User
// Checked and working in Postman
users.post('/', (req, res) => {
  console.log('Create user button clicked!');
//   // have bcrypt hash the password and overwrite user entry to pass into db
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
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
  
  req.body.password = req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.findByIdAndUpdate(req.params.id, req.body, (err, userToUpdate) => {
    if (err) {
      res.status(400).json({ error: err.message })
    } else {
      User.findById(userToUpdate._id, (err, updatedUser) => {
        if (err) {
          res.status(400).json({ error: err.message })
        } else {
          updatedUser.password = ''
          res.status(200).json(updatedUser)
        }
      })
    }
  }) 
})

// Delete User
// Checked and working in Postman
users.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if (err) {
      res.status(400).json({
        error: err.message
      })
    } else {
      res.status(200).json({
        deletedUser
      })
    }
  })
})

// ===========
// RECIPES
// ===========

// ===========
// LOGIN - LOGOUT
// ===========

users.post('/login', (req, res) => {
  // mock user data
  const user = {
    id: 1,
    username: "Spencer"
  } 
  jwt.sign({user: user}, 'secretkey', (err, token) => { // secret key will change to: process.env.TOKEN_SECRET
    res.json({
      token: token
    })
  })
})

// ======================
// JWT SETUP / MIDDLEWARE
// ======================
    // Researched via:
        // User: Brad Traversy
        // https://github.com/bradtraversy/node_jwt_example/blob/master/app.js
        // https://www.youtube.com/watch?v=7nafaH9SddU

// Format of Token:
// Authorization: Bearer <access_token>

// Verify Token Function:
function verifyToken(req, res, next) {
  // Geet auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at space
    const bearer = bearerHeader.split(' ');
    // Get token from Array
    const bearerToken = bearer[1];
    // Set Token
    req.token = bearerToken
    // Next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403)
  }

};


module.exports = users;