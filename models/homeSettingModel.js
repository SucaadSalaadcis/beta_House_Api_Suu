const mongoose = require('mongoose')

const homeSettingSche = new mongoose.Schema({
    title: {
        type: String,
    },
    logo: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    whatsApp: {
        type: Number,
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    tiktok: {
        type: String,
    },
    heroTitle: {
        type: String,
    },
    heroDescription: {
        type: String,
    },
    heroImage: {
        type: String,
    },
    
    footerText: {
        type: String,
    },
    
});

const homeSettingModel = mongoose.model('homeSetting', homeSettingSche)

module.exports = {
    homeSettingModel
};
