const express = require('express')
const router = require('./routes/api-routes.js')

const PORT = process.env.PORT || 3000
const app = express()

const methOver = require('method-override')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const db = require('./models')

app.use(methOver('_method'))
app.use(bodyParser.urlencoded({ extended: false}))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(router)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App running on port: ${PORT}`)) 
})
