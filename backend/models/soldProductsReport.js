var mongoose = require("mongoose");
var joi = require("joi");

var soldProductsReport = mongoose.model(
  "soldProductsReport",
  new mongoose.Schema({
    product: 
      {
        productSerialNumber: {
          type: Number,
          ref: "product",
          required: true,
        },
        quantity: { type: Number, required: true },
      }
    
  })
);

exports.soldProductsReport = soldProductsReport;
