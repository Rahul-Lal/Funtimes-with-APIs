const path = require('path')
const express = require('express')

const server = express()
const router = require('./routes')

server.use(express.static(path.join(__dirname, './public')))
server.use('/swapi/people', router)

module.exports = server
