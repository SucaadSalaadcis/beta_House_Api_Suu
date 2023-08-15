const mongoose = require('mongoose')

const companyInfoSche = new mongoose.Schema({
    name: {
        type: String,

    },
   location: {
        type: String,
        
    },
    logo: {
        type: String,
    },
    email: {
        type: String,
    },
    complainEmail: {
        type: String,
    },
    complainPhone: {
        type: String,
    },
    facebook: {
        type: String,
    },
    tiktok: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instigram: {
        type: String,
    },
})

const  companyInfoModel = mongoose.model('companyInfo', companyInfoSche)


module.exports = {
    companyInfoModel 
};
