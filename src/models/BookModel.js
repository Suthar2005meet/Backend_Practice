const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema ({
    BookName : {
        type : String
    },
    BookPrice : {
        type : Number
    },
    BookType : {
        type : String
    },
    AutherName : {
        type : String
    },
    Language : [{
        type : String
    }]
})

module.exports = mongoose.model('books',BookSchema)