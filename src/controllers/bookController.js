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

const AddElement = async (req,resp) => {
    const AddedData = await BookSchema.findByIdAndUpdate(req.params.id,{$push:{Language:req.body.Language}},{new : true})
    resp.json({
        message : "Data Added Successfully",
        data : AddedData
    })
}

const removeElement = async (req,resp) => {
    const deleteEle = await BookSchema.findByIdAndUpdate(req.params.id,{$pull:{Language:req.body.Language}},{new : true})
    resp.json({
        message : "Data Deleted Successfully",
        data : deleteEle
    })
}

const findEle = async (req,resp) => {
    const searchparam = req.query
    console.log('req.query',req.query)
    resp.json({
        message : 'messaging  ...',
        data : searchparam
    })
}

module.exports = {
    getAllBook,
    getBookByID,
    addBook,
    deleteBook,
    AddElement,
    removeElement,
    findEle
}