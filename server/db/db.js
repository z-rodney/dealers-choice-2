const Sequelize = require("sequelize")
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost/skincare-share'
const db = new Sequelize(dbUrl)

//export your db

module.exports = {
  db
}
