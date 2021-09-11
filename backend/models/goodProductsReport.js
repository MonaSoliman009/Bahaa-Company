var mongoose = require("mongoose");
var joi = require("joi");

var goodProductsReport = mongoose.model(
  "goodProductsReport",
  new mongoose.Schema({
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }],

 
  })
);

exports.goodProductsReport = goodProductsReport;
