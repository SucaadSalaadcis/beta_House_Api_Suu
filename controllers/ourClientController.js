const { OurClientModel } = require("../models/OurClientModel");

const { ourClientvalidation } = require("../validations/ourClientVal");

const error = require('http-errors')

// Get data
const Get = async (req, res) => {
    try {
        const ourClient = await OurClientModel.find()
        res.status(200).send(ourClient);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await OurClientModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post
const Post = async (req, res) => {
    try {
        let { error } = ourClientvalidation(req.body)
        if (error) return res.send(error.message)

        let ourClientObj = new OurClientModel({
            clientName: req.body.clientName,
            clientLogo: req.body.clientLogo,
        })
        await ourClientObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: ourClientObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateourClient = await OurClientModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateourClient})
}

// Delete
const Delete = async (req,res)=>{
    const id = req.params.id
    const deleteourClient = await OurClientModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteourClient})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}

