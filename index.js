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

app.get('/register', (req, res) => {
  res.render('register')
})

// CRUD Operations
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  const newUser = await userModel.create({
    username: username,
    email: email,
    password: password,
  })

  res.send('user register')
})

app.get('/get-users', async (req, res) => {
  // -- find always returns []
  // userModel.find().then((users) => {
  //   res.send(users)
  // })
  // -- findOne returns only one condition which is created first
  await userModel
    .findOne({
      username: 'aashta',
    })
    .then((user) => {
      res.send(user)
    })
})

app.get('/update-user', (req, res) => {
  userModel
    .updateOne({ username: 'aashta' }, { username: 'pasta' })
    .then((result) => {
      res.send(result)
    })

  res.send('User updates')
})

app.get('/delete-user', async (req, res) => {
  // await userModel.deleteOne({ username: 'pasta' }).then((result) => {
  //   res.send(result)
  // })
  // -- findOneAndDelete
  await userModel.findOneAndDelete({
    username: 'pasta',
  })

  res.send('user deleted')
})

app.listen(3000)
