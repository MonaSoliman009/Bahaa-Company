var mongoose = require("mongoose");
var joi = require("joi");

var accountant = mongoose.model(
  "accountant",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    img: {
      type: String,
    },
    approved:{
      type: Boolean, default: false
    }
  })
);


function validateAccountant(accountant) {
    var Schema =joi.object( {
      name: joi.string().min(5).max(25).required(),
      img: joi.string(),
      email: joi.string().min(15).max(225).required(),
      password: joi.string().min(8).max(255).required(),
    
    });
    return Schema.validate(accountant )
  }

  exports.validateAccountant = validateAccountant;

exports.accountant = accountant;