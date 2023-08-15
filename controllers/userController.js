const { userModel } = require("../models/userModel");

const { uservalidation } = require("../validations/userVal");

let bcrypt = require('bcrypt')

const error = require('http-errors')

// Get data
const Get = async (req, res) => {
    try {
        const userList = await userModel.find();
        res.status(200).send(userList);
        // res.json(userList)
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Get by id
const GetById = async(req,res) =>{
    try {
        let {id} = req.params;
        const findId = await userModel.findById(id)
        res.status(200).send(findId);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Post
const Post = async (req, res) => {
    try {
        let { error } = uservalidation(req.body)
        if (error) return res.send(error.message)

        

        // check userka hdu horey ujiray
        const userExist = await userModel.find({email:req.email})
        if(userExist.length>0) return res.status(406).send(error.message)
   
        const userObj = new  userModel(req.body)
        const salt = await bcrypt.genSalt(10);
        //console.log("salt",salt)
        userObj.password = await bcrypt.hash(userObj.password,salt)
        console.log("password",userObj.password)
    
        await userObj.save()
        res.status(200).send({
            status: "sucess",
            message: "successfully inserted",
            info: userObj
        })
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message })
    }

}

// Put
const Put = async (req,res)=>{
    const {id} = req.params
    const updateuser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send({status:"Updated",info:updateuser})
    //  res.json({Status:"Updated",updateuser})
}

// Delete
const Delete = async (req,res)=>{
    const id = req.params.id
    const deleteuser = await userModel.findByIdAndDelete(req.params.id)
     res.status(200).send({status:"deleted",info:deleteuser})
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete
}



