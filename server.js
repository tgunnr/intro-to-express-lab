import express from 'express'
import { collectibles } from './data/collectibles.js'
import { shoes } from './data/shoes.js'

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

// Exercise 4

app.get('/shoes', (req, res) => { 
  if (req.query['min-price'] && req.query['max-price'] && req.query.type) {
    let minPrice = req.query['min-price']
    let maxPrice = req.query['max-price']
    let shoeType = req.query.type
    let filteredShoes = shoes.filter((shoe) => {
      return (shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type === shoeType)
    })
    res.send(filteredShoes)
  } else {
    res.send(shoes)
  }
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
