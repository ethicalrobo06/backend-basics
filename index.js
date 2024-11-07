const express = require('express')
const app = express()
const morgan = require('morgan')
const userModel = require('./models/user')
const dbConnection = require('./config/db')

app.use(morgan('dev'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
// Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/profile', (req, res) => {
  res.send('<h1>Profile</h1>')
})

app.post('/get-form-data', (req, res) => {
  //   console.log(req.query) --> ye get req m aata
  console.log(req.body)
  res.send('data received')
})
app.listen(3000)
