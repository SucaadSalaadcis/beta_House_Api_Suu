let joi = require('joi');

function ourClientvalidation(ourClientObj) {
    let ourClientVal = joi.object({
        clientName: joi.string().required().min(3).max(20),
        clientLogo: joi.string(),      
    })
    return ourClientVal.validate(ourClientObj);
}

module.exports = {
    ourClientvalidation
};
