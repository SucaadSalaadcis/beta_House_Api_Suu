const mongoose = require('mongoose')

const contactFSche = new mongoose.Schema({
    name: {
        type: String,
    },
   phone: {
        type: String,
        
    },
    message: {
        type: String,
    }
})

const  contactFModel = mongoose.model('contactForm', contactFSche)


module.exports = {
    contactFModel 
};
