const mongoose = require("mongoose");
var joi = require("joi");

var modelPrice =mongoose.model("modelPrice", new mongoose.Schema({


    model: {
        type: String,
        required: true,
        unique: true,
      },
      price:{
        type: Number,
        required: true,
       
      }


}))

function validateModel(x) {
  var Schema =joi.object( {
    model: joi.string().min(2).max(40).required(),
    price: joi.number().required(),
   
  
  });
  return Schema.validate(x)
}
exports.validateModel = validateModel;

exports.modelPrice = modelPrice;
