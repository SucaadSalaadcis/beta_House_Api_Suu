const mongoose = require('mongoose')

const aboutSche = new mongoose.Schema({
    fahFahinYar:{
        type: String,
        required: true,
    },
    fahFahin:{
    type: String,
    required: true,
    },
},{timestamps:true});

const  aboutModel = mongoose.model('about', aboutSche)

module.exports = {
    aboutModel 
};