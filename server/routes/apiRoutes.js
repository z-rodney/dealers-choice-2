const router = require("express").Router()
const { Product } = require('../db')
//import models from /db


router.get('/products', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch(err) {
    next(err)
  }
})

router.get('/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.send(product)
  } catch(err) {
    next(err)
  }
})


module.exports = router
