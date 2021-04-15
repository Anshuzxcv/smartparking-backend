const mongoose = require('mongoose');

const parkingLotSchema = {
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    avilability:[{
        time:{
            type:Date,
            required:true
        },
        seats:{
            type:Number,
            required:true
        }
    }]
}

const parkingLot = mongoose.model('parkingLot', parkingLotSchema);

module.exports=parkingLot;