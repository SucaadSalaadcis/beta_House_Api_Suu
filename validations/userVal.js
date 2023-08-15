let joi = require('joi');

function uservalidation(userObj) {
    let userVal = joi.object({
        username: joi.string(),
        email: joi.string().email({tlds:{ allow:false}}),
        password: joi.string().required(),
        role: joi.string().required(),
        status: joi.string()
        
    })
    return userVal.validate(userObj);
}

module.exports = {
    uservalidation
};
