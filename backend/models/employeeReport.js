var mongoose = require("mongoose");
var joi = require("joi");

var employeeReport = mongoose.model(
  "employeeReport",
  new mongoose.Schema({
    maintainedProducts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
     
    }],

    testedProducts:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    soldProducts:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
  
  })
);




exports.employeeReport = employeeReport;