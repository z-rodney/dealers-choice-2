const Sequelize = require("sequelize")
const { STRING } = Sequelize
const db = require('../db')
//import your db

//define your model
const Product = db.define('product', {
  name: {
    type: STRING,
    validate: {
      notEmpty: true
    },
    description: STRING
  }
})
//define any class or instance methods

//export your model
module.exports = Product
