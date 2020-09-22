const express = require("express")
const app = express();
const { db, Product } = require('./db')
const morgan = require('morgan')
const path = require('path');
const zainaRoutine = require("./db/models/ProductSeed");

app.use(morgan('dev'))
app.use(express.json())

app.use(express.static(path.join(__dirname, '/public')))

//require in your routes and use them on your api path
app.use('/api', require('./routes/apiRoutes'))
//404 handler
app.use((req, res, next) => {
  res.status(404).send(`Uh-Oh, page not found`)
})

//500 handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

//set PORT
const port = process.env.PORT || 3033;
const init = async () => {
  await db.sync({force: true})
  await Product.bulkCreate(zainaRoutine)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

init();

//listen
