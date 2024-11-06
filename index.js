const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))
app.set('view engine', 'ejs')

app.get(
  '/',
  (req, res, next) => {
    const a = 5
    const b = 10
    console.log(a + b)

    next()
  },
  (req, res) => {
    res.render('index')
  }
)

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/profile', (req, res) => {
  res.send('<h1>Profile</h1>')
})

app.listen(3000)
