var mongoose = require("mongoose");
var joi = require("joi");

var defectiveProductsReport = mongoose.model(
  "defectiveProductsReport",
  new mongoose.Schema({
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }],

 
  })
);

exports.defectiveProductsReport = defectiveProductsReport;
