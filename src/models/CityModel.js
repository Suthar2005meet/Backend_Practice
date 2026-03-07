const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema ({
    CityName : {
        type : String
    },
    State : {
        type : String
    },
    Population : {
        type : Number
    },
    KnownFor : {
        type : String
    }
})

module.exports = mongoose.model('City',CitySchema)