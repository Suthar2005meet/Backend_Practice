const router = require('express').Router()

const CatagoryController = require('../controllers/CatagoryController')
router.get('/catagorys',CatagoryController.getAllCatagory)
router.get('/catagory/:id',CatagoryController.getCatagoryDetail)
router.post('/catagory',CatagoryController.addCatagory)
router.delete('/catagory/:id',CatagoryController.deleteCatagory)


module.exports = router