import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get('/greetings/:name', function(req, res) {
  res.send(`Well, hello there, ${req.params.name}`)
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})