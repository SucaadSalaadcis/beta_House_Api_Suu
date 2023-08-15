let joi = require('joi');

function contactFvalidation(contactFObj) {
    let contactFVal = joi.object({
        name: joi.string().required().min(3).max(20),
        phone: joi.string().required().min(3).max(30),
        message: joi.string().required().min(3).max(100),
      
    })
    return contactFVal.validate(contactFObj);
}

module.exports = {
    contactFvalidation
};