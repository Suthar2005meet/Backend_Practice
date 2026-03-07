const router = require('express').Router()

const CityController = require('../controllers/CityController')
router.get('/citys',CityController.getAllCity)
router.get('/city/:id',CityController.getCityDetail)
router.post('/city',CityController.addCity)
router.delete('/city/:id',CityController.deleteCity)


module.exports = router