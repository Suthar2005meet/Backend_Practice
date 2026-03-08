const router = require('express').Router()

const ProductController = require('../controllers/ProductController')
router.get('/products',ProductController.getAllProduct)
router.get('/product/:id',ProductController.getFindByid)
router.post('/product',ProductController.addProduct)
router.delete('/product/:id',ProductController.deleteProduct)
router.put('/product/:id',ProductController.UpdateData)
router.put('/selected/:id',ProductController.AddById)
router.put('/data/:id',ProductController.deleteById)
router.get('/serchprod',ProductController.SearchProduct)

module.exports = router