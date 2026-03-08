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

const UpdateData = async (req,resp) => {
    const UpdatedObj = await ProductSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    resp.json ({
        message : 'Data has been updated',
        data : UpdatedObj
    })
}

const AddById = async (req,resp) => {
    const AddedData = await ProductSchema.findByIdAndUpdate(req.params.id,{$push:{ProductColor:req.body.ProductColor}},{new : true})
    resp.json({
        message : "Data Added Successfully",
        data : AddedData
    })
}

const deleteById = async (req,resp) => {
    const deletedData = await ProductSchema.findByIdAndUpdate(req.params.id,{$pull:{ProductColor:req.body.ProductColor}},{new : true})
    resp.json({
        message : "Data Added Successfully",
        data : deletedData
    })
}

const SearchProduct = async(req,resp) => {
    const SeachParam = req.query;
    console.log('req.query',SeachParam)
    resp.json({
        message : "Searching..."
    })
}

module.exports = {
    getAllProduct,
    getFindByid,
    addProduct,
    deleteProduct,
    UpdateData,
    AddById,
    deleteById,
    SearchProduct
}