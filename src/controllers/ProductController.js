const ProductSchema = require('../models/ProductModel')

const getAllProduct = async(req,resp) => {
    const allProduct = await ProductSchema.find()
    resp.json({
        message :'Data Successfully Fetcehd',
        data : allProduct
    })
}
const getFindByid = async(req,resp) => {
    const findProduct = await ProductSchema.findById(req.params.id)
    if (findProduct){
        resp.json({
            message : 'data founded',
            data : findProduct
        })
    }else{
        resp.json({
            message : 'data not found'
        })
    }
}

const addProduct = async(req,resp) => {
    const savedProduct = await ProductSchema.create(req.body)
    resp.status(201).json({
        message : 'product saved',
        data : savedProduct
    })
}

const deleteProduct = async(req,resp) => {
    const deletedProductObj = await ProductSchema.findByIdAndDelete(req.params.id)
    if(deletedProductObj){
        resp.status(200).json({
            message : 'Product deleted',
            data : deletedProductObj
        })
    }else{
        resp.json({
            message : 'product has not be deleted'
        })
    }
}

module.exports = {
    getAllProduct,
    getFindByid,
    addProduct,
    deleteProduct
}