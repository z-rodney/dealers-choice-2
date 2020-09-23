const router = require("express").Router()
const { Product } = require('../db')
//import models from /db

router.param('id', async (req, res, next, id) => {
  try {
    const product = await Product.findByPk(id)
    req.product = product
    next()
  } catch (err) {
    next(err)
  }
})

router.post('/products', async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.send(product)
  } catch(err) {
    next(err)
  }
})

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
    res.send(req.product)
  } catch(err) {
    next(err)
  }
})

router.put('/products/:id', async (req, res, next) => {
  try {
    await req.product.update(req.body)
    res.send(req.product)
  } catch(err) {
    next(err)
  }
})

router.delete('/products/:id', async (req, res, next) => {
  try {
    req.product.destroy()
    res.sendStatus(204)
  } catch(err) {
    next(err)
  }
})


module.exports = router
