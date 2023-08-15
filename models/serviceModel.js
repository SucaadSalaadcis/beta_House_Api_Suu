const mongoose = require('mongoose')

const serviceSche = new mongoose.Schema({
    title: {
        type: String,
    },
    Icon: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
})

const  serviceModel = mongoose.model('service', serviceSche)

module.exports = {
    serviceModel 
};


