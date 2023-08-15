const mongoose = require('mongoose')

const usersche = new mongoose.Schema({
    username: {
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default:"user",
        enum:["Admin","CustomerCare"]
       
    },
    status:{
        type:String,
        default:"active",
        enum:["active","pending","blocked"]
    }
})
const userModel = mongoose.model('users', usersche)

module.exports = {
    userModel 
};
