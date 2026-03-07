const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StateSchema = new Schema ({
    state : {
        type : String
    },
    district : {
        type : String
    },
    Population : {
        type : Number
    }
})

module.exports = mongoose.model('State',StateSchema)