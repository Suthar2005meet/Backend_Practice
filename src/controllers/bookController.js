const BookSchema = require('../models/BookModel')

const getAllBook = async(req,resp) =>{
    const allbook = await BookSchema.find()
    resp.json({
        message : 'All Books data...',
        data : allbook
    })
}

const getBookByID = async(req,resp) => {
    const bookDetail = await BookSchema.findById(req.params.id)
    if(bookDetail){
        resp.json({
            message : 'Book Detail Successfully fetched',
            data : bookDetail
        })
    }else{
        resp.json({
            message : 'Book Data not been found'
        })
    }
}

const addBook = async(req,resp) => {
    const savedBook = await BookSchema.create(req.body)
    resp.status(200).json({
        message : 'Book Data saved',
        data : savedBook
    })
}

const deleteBook = async(req,resp) => {
    const deletedBook = await BookSchema.findByIdAndDelete(req.params.id)
    if(deletedBook){
        resp.json({
            message : 'delete book sucessfully',
            data : deletedBook
        })
    }else{
        resp.json({
            message :'book data not found'
        })
    }
}

module.exports = {
    getAllBook,
    getBookByID,
    addBook,
    deleteBook
}