var mongoose = require("mongoose");
var joi = require("joi");

var owner = mongoose.model(
  "owner",
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
  })
);

function validateOwner(owner) {
  var Schema = {
    name: joi.string().min(5).max(25).required(),
    img: joi.string(),
    email: joi.string().min(15).max(225).required(),
    password: joi.string().min(8).max(255).required(),
  };
  return joi.validate(owner, Schema);
}

exports.validateOwner = validateOwner;

exports.owner = owner;
