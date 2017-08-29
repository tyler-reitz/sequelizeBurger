const express = require('express')
const path = require('path')

const db = require('../models')

const router = express.Router()

const getPath = (url) => path.join(__dirname, '..', '/views/', `${url}.handlebars`)

router.get('/', (req, res) => {
  // burger.get(
  //   burgers => res.render(getPath('index'), { burger_data: burgers }))
  db.Burgers.findAll({}).then(result => {
    res.render(getPath('index'), { burger_data: result})
  })
})

router.post('/add', (req, res) => {
  const { burger_name } = req.body
  console.log(burger_name)
  
  db.Burgers.create({
    burger_name: burger_name,
    devoured: false
  }).then(result => {
    res.redirect('/')
  })
})

router.get('/eat', (req, res) => {
  res.send('eat a burger')
})

module.exports = router