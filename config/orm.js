const connection = require('./connection')

const orm = {

  selectAll(tbl, cb) {
    connection.query('SELECT * FROM ??', [tbl], (err, res) => {
      if (err) throw err
      cb(res)
    })
  },
  
  insertOne(tbl, name, cb) {
    connection.query('INSERT INTO ?? SET ?', [tbl, {burger_name: name}], (err, res) => {
      if (err) throw err
      cb('insert', res)
    })
  },
  
  updateOne(tbl, name, cb) {
    connection.query('UPDATE ?? SET ? WHERE ?', [tbl, {devoured: 1}, {burger_name: name}], (err, res) => {
      if (err) throw err
      cb('update', res)
    })
  }
  
}

// orm.insertOne('burgers', 'test2', console.log)
// orm.updateOne('burgers', 'test2', console.log)
// orm.selectAll('burgers', console.log)

module.exports = orm