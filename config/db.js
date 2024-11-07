const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
})

module.exports = connection
