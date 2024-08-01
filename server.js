import express from 'express'

const app = express()

app.set('view engine', 'ejs')

// Exercise 1

app.get('/greetings/:name', function(req, res) {
  res.send(`Well, hello there, ${req.params.name}`)
})

// Exercise 2

app.get('/roll/:number', function(req, res) {
  if (isNaN(req.params.number)) {
    return res.send("You must specify a number.")
  }
  res.send(`You rolled a ${Math.floor(Math.random() * req.params.number) + 1}`)
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})