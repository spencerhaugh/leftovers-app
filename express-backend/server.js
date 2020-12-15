// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors')

// Config
require('dotenv').config();
const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/leftovers-app'


const whitelist = ['http://localhost:3003', 'https://mystifying-mccarthy-7142e6.netlify.app/']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))


// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Database Connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, () => {
    console.log(`Connected to MONGODB at ${MONGODB_URI}`)
  })

// Controllers
const userController = require('./controllers/users.js')
app.use('/users', userController)


// TESTING
// index view to show deployment
app.get('/', (req, res) => {
    res.send('🎉')
  })

// Listener
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})