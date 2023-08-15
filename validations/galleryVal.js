let joi = require('joi');

function galleryvalidation(galleryObj) {
    let galleryVal = joi.object({
        imageTitle: joi.string().required().min(3).max(20),
        image: joi.string(),      
    })
    return galleryVal.validate(galleryObj);
}

module.exports = {
    galleryvalidation
};
