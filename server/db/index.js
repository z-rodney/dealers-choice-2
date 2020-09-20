const { db } = require('./db')
//import your models
const Product = require('./models/Product')
//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
  db,
  Product
}
