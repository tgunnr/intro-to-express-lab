import express from 'express'
import { collectibles } from './data/collectibles.js'

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
  res.send(`You rolled a ${Math.floor(Math.random() * req.params.number) + 1}!`)
})

// Exercise 3

app.get('/collectibles/:index', function(req, res) {
  try {
    res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`)
  } catch (error) {
    res.send("This item is not yet in stock. Check back soon!")
  }
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
