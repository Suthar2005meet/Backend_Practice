const CitySchema = require('../models/CityModel')

const getAllCity = async(req,resp) => {
    const allCity = await CitySchema.find()
    resp.json({
        message : 'City details Fetched',
        data : allCity
    })
}

const getCityDetail = async(req,resp) => {
    const CityDetail = await CitySchema.findById(req.params.id)
    if(CityDetail){
        resp.json({
            message : 'City Detail successfully fetched',
            data : CityDetail
        })
    }else{
        resp.json({
            message : 'book detail not found'
        })
    }
}

const addCity = async(req,resp) => {
    const savedCity = await CitySchema.create(req.body)
    resp.status(200).json({
        message : 'City Data saved',
        data : savedCity
    })
}

const deleteCity = async(req,resp) => {
    const deletedCity = await CitySchema.findByIdAndDelete(req.params.id)
    if(deletedCity){
        resp.json({
            message : 'delete City sucessfully',
            data : deletedCity
        })
    }else{
        resp.json({
            message :'City data not found'
        })
    }
}

module.exports = {
    getAllCity,getCityDetail,addCity,deleteCity
}