let joi = require('joi');



function aboutvalidation(aboutObj) {
    let aboutVal = joi.object({
        fahFahinYar: joi.string(),
        fahFahin: joi.string(),
    })
    return aboutVal.validate(aboutObj);
}

module.exports = {
    aboutvalidation
};
