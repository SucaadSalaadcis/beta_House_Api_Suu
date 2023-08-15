const  { contactFModel } = require("../models/contactModel");

const { contactFvalidation } = require("../validations/contactVal");

const error = require('http-errors')

// Get 
const Get = async (req, res) => {
    try {
        const contact = await contactFModel.find()
        res.status(200).send(contact);
        // res.json({contact:contact})
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id 
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await contactFModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post
const Post = async (req, res) => {
    try {
        let { error } = contactFvalidation(req.body)
        if (error) return res.send(error.message)

        let contactObj = new contactFModel({
            name: req.body.name,
            phone: req.body.phone,
            message: req.body.message,
        })
        await contactObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: contactObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateContact = await contactFModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateContact})
    //  res.json({Status:"Updated",updateContact})
}

// Delete
const Delete =  async (req,res)=>{
    const id = req.params.id
    const deleteContact = await contactFModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteContact})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}
