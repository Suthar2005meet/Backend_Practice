const StateSchema = require('../models/StateModel')

const getAllState = async(req,resp) => {
    const allState = await StateSchema.find()
    resp.json({
        message : 'state details Fetched',
        data : allState
    })
}

const getStateDetail = async(req,resp) => {
    const StateDetail = await StateSchema.findById(req.params.id)
    if(StateDetail){
        resp.json({
            message : 'state Detail successfully fetched',
            data : StateDetail
        })
    }else{
        resp.json({
            message : 'state detail not found'
        })
    }
}

const addState = async(req,resp) => {
    const savedState = await StateSchema.create(req.body)
    resp.status(200).json({
        message : 'state Data saved',
        data : savedState
    })
}

const deleteState = async(req,resp) => {
    const deletedState = await StateSchema.findByIdAndDelete(req.params.id)
    if(deletedState){
        resp.json({
            message : 'delete state sucessfully',
            data : deletedState
        })
    }else{
        resp.json({
            message :'state data not found'
        })
    }
}

module.exports = {
    getAllState,getStateDetail,addState,deleteState
}