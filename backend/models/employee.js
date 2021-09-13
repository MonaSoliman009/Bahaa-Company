var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var joi = require("joi");

var employee=mongoose.model("employee", new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true //performance 
      },
    password: {
        type: String,
        required: true
      },
      mobile:{
        type: String,
        
      },
    image:{
        type: String, 
        

      }  ,
      approved:{
        type: Boolean, default: false
      }

}));

function validateEmployee(emp) {
  var Schema =joi.object( {
    name: joi.string().min(5).max(45).required(),
    image: joi.string(),
    email: joi.string().min(15).max(225).required(),
    password: joi.string().min(8).max(255).required(),
  
  });
  return Schema.validate(emp)
}

exports.validateEmployee = validateEmployee;
exports.employee = employee;
