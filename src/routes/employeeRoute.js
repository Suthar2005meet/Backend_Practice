const router =  require('express').Router()

const EmployeeController = require('../controllers/EmpoyeeController')
router.get('/employee',EmployeeController.getemployee)
router.get('/employee/:salary',EmployeeController.getSalary)

module.exports = router