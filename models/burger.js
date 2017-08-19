const orm = require('../config/orm')
const table = 'burgers'

const burgers = {
  
  get(cb) {
    orm.selectAll(table, cb)
  },
  
  add(name, cb) {
    orm.insertOne(table, name, cb)
  },

  eat(name, cb) {
    orm.updateOne(table, name, cb)
  }
  
}

module.exports = burgers