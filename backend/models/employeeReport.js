var mongoose = require("mongoose");
var joi = require("joi");

var employeeReport = mongoose.model(
  "employeeReport",
  new mongoose.Schema({
    maintainedProducts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
     
    }],

    testedProducts:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
    soldProducts:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }],
  
  })
);




exports.employeeReport = employeeReport;