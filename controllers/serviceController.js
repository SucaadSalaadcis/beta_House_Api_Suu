const { serviceModel } = require("../models/serviceModel");

const { servicevalidation } = require("../validations/serviceVal");

const error = require('http-errors')


// Get data
const Get = async(req, res) => {
    try {
        const service = await serviceModel.find()
        res.status(200).send(service);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await serviceModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post 
const Post = async (req, res) => {
    try {
        let { error } = servicevalidation(req.body)
        if (error) return res.send(error.message)

        let serviceObj = new serviceModel({
            title: req.body.title,
            Icon: req.body.Icon,
            description: req.body.description,
        })
        await serviceObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: serviceObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateService = await serviceModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateService})
}

// Delete
const Delete = async (req,res)=>{
    const id = req.params.id
    const deleteService = await serviceModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteService})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}

