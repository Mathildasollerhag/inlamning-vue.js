const route = require('express').Router();
const productModel = require('../models/product/productModel')

route.post('/addproduct', productModel.addProduct)

route.get('/getproducts', productModel.getProducts)
route.get('/:id', productModel.getProductById)

module.exports = route;