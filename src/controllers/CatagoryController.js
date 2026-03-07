const CatagorySchema = require('../models/CatagoryModel')

const getAllCatagory = async(req,resp) => {
    const allCatagory = await CatagorySchema.find()
    resp.json({
        message : 'catagory details Fetched',
        data : allCatagory
    })
}

const getCatagoryDetail = async(req,resp) => {
    const CatagoryDetail = await CatagorySchema.findById(req.params.id)
    if(CatagoryDetail){
        resp.json({
            message : 'catagory Detail successfully fetched',
            data : CatagoryDetail
        })
    }else{
        resp.json({
            message : 'catagory detail not found'
        })
    }
}

const addCatagory = async(req,resp) => {
    const savedCatagory = await CatagorySchema.create(req.body)
    resp.status(200).json({
        message : 'catagory Data saved',
        data : savedCatagory
    })
}

const deleteCatagory = async(req,resp) => {
    const deletedCatagory = await CatagorySchema.findByIdAndDelete(req.params.id)
    if(deletedCatagory){
        resp.json({
            message : 'delete Catagory sucessfully',
            data : deletedCatagory
        })
    }else{
        resp.json({
            message :'catagory data not found'
        })
    }
}

module.exports = {
    getAllCatagory,getCatagoryDetail,addCatagory,deleteCatagory
}