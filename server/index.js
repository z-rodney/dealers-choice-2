const express = require("express")
const app = express();
const { db } = require('./db')
const morgan = require('morgan')
const path = require('path')
//initialize app
//require morgan|volleyball, path packages
//require db from /db

app.use(morgan('dev'))
app.use(express.json())
//use morgan|volleyball
//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static(path.join(__dirname,'/public')))

//require in your routes and use them on your api path

//404 handler
app.use((req, res, next) => {
  res.status(404).send(`Uh-Oh, page not found`)
})

//500 handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

//set PORT
const port = process.env.PORT || 0;
const init = async () => {
  await db.sync()
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

init();

//listen
