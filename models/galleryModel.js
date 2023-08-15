const mongoose = require('mongoose')

const gallerySche = new mongoose.Schema({
    imageTitle: {
        type: String,
    },
    image: {
        type: String,
        
    },
})

const  galleryModel = mongoose.model('gallery', gallerySche)

module.exports = {
    galleryModel 
};