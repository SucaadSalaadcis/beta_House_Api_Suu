let joi = require('joi');

function homeSettingvalidation(homeSettingObj) {
    let homeSettingVal = joi.object({
        title: joi.string().required().min(3).max(24),
        logo: joi.string().required(),
        name: joi.string().required().min(3).max(15),
        address: joi.string().required().min(3).max(30),
        email: joi.string().email({tlds:{ allow:false}}),
        phone: joi.number().required(),
        whatsApp: joi.number().required(),
        facebook: joi.string().required().min(3).max(40),
        instagram: joi.string().required().min(3).max(35),
        tiktok: joi.string().required().min(3).max(20),
        heroTitle: joi.string().required().min(3).max(20),
        heroDescription: joi.string().required().min(3).max(100),
        heroImage: joi.string(),
        footerText: joi.string().required().min(3).max(45),    
    })
    return homeSettingVal.validate(homeSettingObj);
}



module.exports = {
    homeSettingvalidation 
};