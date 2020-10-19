// Import dependencie express
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// Starting express
const server = express()

// To use body request
server.use(express.urlencoded({ extended: true}))

// Using static archives
server.use(express.static('public'))

// To configure template engines
server.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// To create a route
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

// Por causa do HBS não se usa mais esta forma
//server.get('/', (request, response) => {
    //return response.sendFile(path.join(__dirname, 'views', 'index.html'))

//})

// Starting server
server.listen(5500)