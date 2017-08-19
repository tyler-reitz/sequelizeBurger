const express = require('express')
const burger = require('../models/burger')
const path = require('path')

const router = express.Router()

const getPath = (url) => path.join(__dirname, '..', '/views/', `${url}.handlebars`)

router.get('/', (req, res) => {
  burger.get(
    burgers => res.render(getPath('index'), { burger_data: burgers }))
})

router.post('/add', (req, res) => {
  const { burger_name } = req.body
  console.log(burger_name)
  burger.add(burger_name, (status) => {
    console.log(status)
    res.redirect('/')
  })
})

router.get('/eat', (req, res) => {
  res.send('eat a burger')
})

module.exports = router