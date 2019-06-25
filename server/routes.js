const express = require('express')
const request = require('superagent')

const router = express.Router()
router.use(express.json())

const swapiUrl = 'https://swapi.co/api'

router.get('/', (req, res) => {
  const url = `${swapiUrl}/people`

  request
    .get(url)
    .then(swapires => {
      res.json(swapires)
    })
    .catch(err => {
      res.status(500).send('Consumung SWAPI failed')
      console.error(err)
    })
})

module.exports = router
