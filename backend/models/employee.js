const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const employeeSchema=new Schema({
    userName:{
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
        required: true
      },
    image:{
        type: String, 
        required: true

      }  

});

employeeSchema.plugin(uniqueValidator);

module.exports=mongoose.model('Employee',employeeSchema);