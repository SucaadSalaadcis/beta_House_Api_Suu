const { userModel } = require("../models/userModel");
const loginvalidation = require("../validations/loginVal");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

 const Login = async (req,res)=>{ 

    const { error } = loginvalidation(req.body);

    if (error) return res.status(400).send({error});
      
    try {
        const user = await userModel.findOne({email:req.body.email,status:"active"})

        if(!user) return res.status(400).send({error:"Email Not found "})
        
        const passCheck = await bcrypt.compare(req.body.password, user.password)
    
        if(!passCheck) return res.status(404).send({error:"Invalid password"})

         // Generate token  
          const token = jwt.sign({
            email:user.email,
            id:user._id},
            process.env.SECRET_KEY,{expiresIn:"1h"}
          )

          return res.status(200).send({message:"successfully loged" ,AccessToken:token,Login:true})

        
    } catch (error) {
      console.log(error)
        res.status(401).send(error.message)
    }
   
}

module.exports={Login}