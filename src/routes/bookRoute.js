const router = require('express').Router()

const BookController = require('../controllers/bookController')
router.get('/books',BookController.getAllBook)
router.get('/books/:id',BookController.getBookByID)
router.post('/book',BookController.addBook)
router.delete('/books/:id',BookController.deleteBook)

module.exports = router