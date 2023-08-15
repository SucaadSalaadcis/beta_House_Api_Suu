const mongoose = require('mongoose')

const ourClientSche = new mongoose.Schema({
    clientName: {
        type: String,
    },
    clientLogo: {
        type: String,
        
    },
})

const  OurClientModel = mongoose.model('ourClient', ourClientSche)


module.exports = {
    OurClientModel 
};