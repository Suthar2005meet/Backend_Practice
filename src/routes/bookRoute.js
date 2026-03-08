const router = require('express').Router()

const BookController = require('../controllers/bookController')
router.get('/books',BookController.getAllBook)
router.get('/books/:id',BookController.getBookByID)
router.post('/book',BookController.addBook)
router.delete('/books/:id',BookController.deleteBook)
router.put('/add/:id',BookController.AddElement)
router.put('/remove/:id',BookController.removeElement)
router.get('/find',BookController.findEle)

module.exports = router