let joi = require('joi');

function companyInfovalidation(companyInfoObj) {
    let companyInfoVal = joi.object({
        name: joi.string().required().min(3).max(20),
        location: joi.string().required().min(3).max(15),
        logo: joi.string(),
        email: joi.string().email({tlds:{ allow:false}}),
        complainEmail: joi.string().email({tlds:{ allow:false}}),
        complainPhone: joi.string().required().min(3).max(23),
        facebook: joi.string().required().min(3).max(20),
        tiktok: joi.string().required().min(3).max(20),
        twitter: joi.string().required().min(3).max(22),
        instigram: joi.string().required().min(3).max(24),
      
    })
    return companyInfoVal.validate(companyInfoObj);
}


module.exports = {
    companyInfovalidation 
};
