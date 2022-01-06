const mongoose = require("mongoose");
var joi = require("joi");
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
function validateAccessories(acc) {
  var Schema =joi.object( {
    type: joi.string().min(2).max(45).required(),
    price: joi.number().positive().min(1).required(),
    quantity: joi.number().positive().min(1).required(),
  
  });
  return Schema.validate(acc)
}
exports.validateAccessories = validateAccessories;

exports.accessories = accessories;

