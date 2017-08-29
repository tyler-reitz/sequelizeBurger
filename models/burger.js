module.exports = function (sequelize, DataTypes) {
  const Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    timestamps: false  
  })

  return Burgers
}