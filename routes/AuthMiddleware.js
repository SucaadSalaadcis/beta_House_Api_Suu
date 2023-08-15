const jwt = require('jsonwebtoken')
const { userModel } = require("../models/userModel");
require('dotenv').config()

const AuthenticateRoute= (AllowedRoles)=>{
    return async (req,res,next)=> {
        const TokentHeader = req.headers['authorization']
        // console.log(TokentHeader)
        if(!TokentHeader) return res.status(401).send('Access Token is not provided')
        const token = TokentHeader.split(' ')[1]
        
    try {
        const TokenVerify = jwt.verify(token,process.env.SECRET_KEY)
        const user = await userModel.findById(TokenVerify.id)
        if(!user) return res.status(404).send('User is Not Found')
        if(!user.status=='active') return res.status(401).send("User is Not Active")
        console.log(user.role)
        
        if(!AllowedRoles.includes(user.role)) 
        return res.status(401).send("you are not allowed to access this route")
        next()  


    } catch (error) {
        res.status(401).send(error.message);
    }
    }
}


module.exports={AuthenticateRoute}