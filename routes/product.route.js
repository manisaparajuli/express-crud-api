const express = require('express');
const router = express.Router()
const Product = require('../models/product.model')
const {getProducts, getProduct, updateProduct, createProduct, deleteProduct} = require('../controllers/product.controller')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)

module.exports = router;