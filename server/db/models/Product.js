const { db } = require('../db')
const Sequelize = require("sequelize")
const { STRING, ENUM } = Sequelize
//import your db

const Product = db.define('product', {
  name: {
    type: STRING,
    validate: {
      notEmpty: true
    }
  },
  description: STRING,
  appliedAt: ENUM('AM', 'PM', 'AM/PM'),
  productType: ENUM('Cleanser', 'Mask', 'Moisturizer', 'Serum', 'Sunscreen', 'Toner', 'Multi-purpose', 'Other'),
  imageUrl: STRING,
  skinType: ENUM('Oily', 'Dry', 'Combo', 'All')
})
//define any class or instance methods


module.exports = Product
