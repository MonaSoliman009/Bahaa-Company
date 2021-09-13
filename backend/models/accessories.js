const mongoose = require("mongoose");
const accessories=mongoose.model("accessories", new mongoose.Schema({
    type:{
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
      },
    quantity: {
        type: Number,
        required: true
      } 

}));

exports.accessories = accessories;

