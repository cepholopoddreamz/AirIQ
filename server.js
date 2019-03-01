const http = require('http')
const path = require('path')
const methods = require('methods')
const express = require('express')
const bodyParser = require('body-parser')
const knexConfig = require('./knexfile')
const env = 'development'
const knex = require('knex')(knexConfig[env])
const app = express()

require("dotenv").config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('method-override')())

app.get('/ping', function (req, res) {
 return res.send('pong')
})

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on port ' + server.address().port)
})
