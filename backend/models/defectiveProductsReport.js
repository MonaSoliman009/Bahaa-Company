var mongoose = require("mongoose");
var joi = require("joi");

var defectiveProductsReport = mongoose.model(
  "defectiveProductsReport",
  new mongoose.Schema({
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    }],

 
  })
);

exports.defectiveProductsReport = defectiveProductsReport;
