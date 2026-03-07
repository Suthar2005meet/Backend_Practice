const router = require('express').Router()

const ProductController = require('../controllers/ProductController')
router.get('/products',ProductController.getAllProduct)
router.get('/product/:id',ProductController.getFindByid)
router.post('/product',ProductController.addProduct)
router.delete('/product/:id',ProductController.deleteProduct)

module.exports = router