const mongoose = require('mongoose')

const houseSche = new mongoose.Schema({
    houseType: {
        type: String,
    },
    houseArea: {
        type: String,
    },
    houseAddress: {
        type: String,
        required: true
    },
    houseAge: {
        type: Number,
    },
    houseRent: {
        type: Number,
    },
    houseDeposit: {
        type: Number,
    },
    houseParking: {
        type: String,
    },
    images: {
        type: String,
    },
    houseStatus: {
        type:String,
        // default:"active",
        // enum:["active","pending","blocked"]
    },
    houseRooms: {
        type: Number,
    },
    houseToilet: {
        type: Number,
    },
    houseMasterRoom: {
        type: Number,
    },
    houseDescription: {
        type: String,
    },
    
});

const houseModel = mongoose.model('house', houseSche)

module.exports = {
    houseModel
     // export as obj  {housemodel} else you will see this error 
    // (Cannot read properties of undefined (reading 'findOne )
};
