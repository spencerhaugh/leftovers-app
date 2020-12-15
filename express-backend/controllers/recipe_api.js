// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const users = express.Router()
const User = require('../models/user.js')
const axios = require('axios')




// require('dotenv').config()
const baseURL = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='
// const apiKey = 'e30a8201eca9495785674b0937477c7f'
const apiKey = process.env.API_KEY || 'e30a8201eca9495785674b0937477c7f'
const limit = '&number=10' // limit api call to 10 results for testing
let ingredient = 'potato'; //FOR TESTING REMOVE VALUE 
let queryURL = `${baseURL}${ingredient}&apiKey=${apiKey}${limit}`

console.log(queryURL)





// module.exports = recipe_api

// example url (working in browser)
// https://api.spoonacular.com/recipes/findByIngredients?ingredients=corn&apiKey=e30a8201eca9495785674b0937477c7f