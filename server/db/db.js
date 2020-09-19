const Sequelize = require("sequelize")
const dbUrl = process.env.DATABASE_URL || ''
//initialize your db, don't forget to include the possible heroku database URL
const db = new Sequelize(dbURL)

//export your db

module.exports = {
  db
}
