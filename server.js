const express = require('express')
const art = require('./data.js')
// const cors = require('cors')
const app = express()

// app.use(cors())
app.use(express.json())

app.locals.title = 'Oliva Ruth Arts API'
app.locals.art = art

app.set('port', 3001)
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
})

app.get('/art', (request, response) => {
  response.status(200).json(app.locals.art)
})

app.get('/art/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const foundArt = app.locals.art.find(idea => idea.id === id)

  if (!foundArt) {
    return response.status(404).json({ message: `Sorry, no art found with an id of ${id}` })
  }

  response.status(200).json(foundArt)
})

app.post('/art', (request, response) => {
  const submittedArt = request.body

  for (let requiredParameter of ['type', 'title', 'medium', 'date', 'dimension', 'description', 'url']) {
    if (!submittedArt[requiredParameter]) {
      return response.status(422).json({ message: `Body is missing required parameter of ${requiredParameter}.`})
    }
  }

  submittedArt.id = Date.now()
  app.locals.art.push(submittedArt)

  response.status(201).json(submittedArt)
})

app.delete('/art/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const filteredArt = app.locals.art.filter(art => art.id !== id)
  app.locals.art = filteredArt

  response.status(200).json(app.locals.art)
})

module.exports = app