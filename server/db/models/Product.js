const Sequelize = require("sequelize")
const { STRING, ENUM } = Sequelize
const db = require('../db')
//import your db

//define your model
const Product = db.define('product', {
  name: {
    type: STRING,
    validate: {
      notEmpty: true
    },
    description: STRING,
    appliedAt: ENUM('AM', 'PM', 'AM/PM')
  }
})
//define any class or instance methods

//export your model
module.exports = Product
