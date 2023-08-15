let joi = require('joi');

function housevalidation(houseObj) {
    let houseVal = joi.object({
        houseType: joi.string().required().min(3).max(20),
        houseArea: joi.string().required().min(3).max(20),
        houseAddress: joi.string().required().min(3).max(35),
        houseAge: joi.number().required(),
        houseRent: joi.number().required(),
        houseDeposit: joi.number().required(),
        houseParking: joi.string().required(),
        images: joi.string().required(),
        houseStatus: joi.string().required().min(3).max(20),
        houseRooms: joi.number().required(),
        houseToilet: joi.number().required(),
        houseMasterRoom: joi.number().required(),
        houseDescription: joi.string().required().min(3).max(100),

    })
    return houseVal.validate(houseObj);
}

module.exports = {
    housevalidation
};
