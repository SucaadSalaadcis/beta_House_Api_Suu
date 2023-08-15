let joi = require('joi');

function servicevalidation(serviceObj) {
    let serviceVal = joi.object({
        title: joi.string().required().min(3).max(30),
        Icon: joi.string(),      
        description: joi.string().required().min(3).max(100),
    })
    return serviceVal.validate(serviceObj);
}


module.exports = {
    servicevalidation
};