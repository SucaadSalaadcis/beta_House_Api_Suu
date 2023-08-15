const  { houseModel } = require("../models/houseModel");

const { housevalidation } = require("../validations/houseVal");

const error = require('http-errors')

// Get data
const Get = async function (req, res) {
    try {
        const house = await houseModel.find()
        res.status(200).send(house);
        //   res.json({house:house})
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get By id
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await houseModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post
const Post = async (req, res) => {
    try {
        let { error } = housevalidation(req.body)
        if (error) return res.send(error.message)

        let houseObj = new houseModel({
            houseType:req.body.houseType,
            houseArea:req.body.houseArea,
            houseAddress:req.body.houseAddress,
            houseAge:req.body.houseAge,
            houseRent:req.body.houseRent,
            houseDeposit:req.body.houseDeposit,
            houseParking:req.body.houseParking,
            images:req.body.images,
            houseStatus:req.body.houseStatus,
            houseRooms:req.body.houseRooms,
            houseToilet:req.body.houseToilet,
            houseMasterRoom:req.body.houseMasterRoom,
            houseDescription:req.body.houseDescription,
        })
        await houseObj.save();
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: houseObj

        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateHouse = await houseModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateHouse})
    //  res.json({Status:"Updated",updateHouse})
}

// Delete
const Delete = async (req,res)=>{
    const id = req.params.id
    const deleteHouse = await houseModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:"deleted",info:deleteHouse})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}


