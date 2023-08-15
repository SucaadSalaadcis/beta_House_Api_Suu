const  { galleryModel } = require("../models/galleryModel");

const  { galleryvalidation } =require("../validations/galleryVal");

const error = require('http-errors')

// Get data
const Get = async (req, res) => {
    try {
        const gallery = await galleryModel.find()
        res.status(200).send(gallery);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await galleryModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post 
const Post = async (req, res) => {
    try {
        let { error } = galleryvalidation(req.body)
        if (error) return res.send(error.message)

        let galleryObj = new galleryModel({
            imageTitle: req.body.imageTitle,
            image: req.body.image,
        })
        await galleryObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: galleryObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateGallery = await galleryModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateGallery})
}

// Delete
const Delete = async (req,res)=>{
    const id = req.params.id
    const deleteGallery = await galleryModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteGallery})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}


